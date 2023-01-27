import { NextApiRequest, NextApiResponse } from "next";
import { errorMessageOf } from "../../../utils";
import { sampleUserData } from "../../../utils/sample-data";

const handler = (_req: NextApiRequest, res: NextApiResponse): void => {
    try {
        if (!Array.isArray(sampleUserData)) {
            throw new Error("Cannot find user data");
        }

        res.status(200).json(sampleUserData);
    } catch (error) {
        res.status(500).json({ statusCode: 500, message: errorMessageOf(error) });
    }
};

export default handler;
