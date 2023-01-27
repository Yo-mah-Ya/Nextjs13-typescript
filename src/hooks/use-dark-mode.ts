import { useLocalStorage } from "./use-local-storage";
import { useMediaQuery } from "./use-media-query";

interface UseDarkModeOutput {
    isDarkMode: boolean;
    toggle: () => void;
}

export const useDarkMode = (defaultValue?: boolean): UseDarkModeOutput => {
    const preferColorSchema = "(prefers-color-scheme: dark)";
    const isDarkOS = useMediaQuery(preferColorSchema);
    const [isDarkMode, setDarkMode] = useLocalStorage<boolean>(
        preferColorSchema,
        defaultValue ?? isDarkOS ?? false
    );

    return {
        isDarkMode,
        toggle: () => setDarkMode((prev) => !prev),
    };
};
