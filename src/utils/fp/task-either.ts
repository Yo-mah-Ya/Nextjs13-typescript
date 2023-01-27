import { Either, left, right } from "./either";
import type { Lazy } from "./function";
import type { Task } from "./task";

export type TaskEither<E, A> = Task<Either<E, A>>;
export const tryCatch =
    <E, A>(f: Lazy<Promise<A>>, onRejected: (reason: unknown) => E): TaskEither<E, A> =>
    async () => {
        try {
            return right(await f());
        } catch (error) {
            return left(onRejected(error));
        }
    };
