/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
    collectCoverage: true,
    coverageDirectory: "coverage",
    preset: "ts-jest",
    testEnvironment: "jest-environment-jsdom",
    testRegex: "test.([t]sx?)$",
    testPathIgnorePatterns: [
        "<rootDir>/node_modules/",
        "<rootDir>/npm-packages-offline-cache/",
        "<rootDir>/.next/",
        "<rootDir>/.vscode/",
        "<rootDir>/ci/",
        "<rootDir>/coverage/",
        "<rootDir>/public/",
    ],
    moduleFileExtensions: ["js", "mjs", "cjs", "jsx", "ts", "tsx", "json", "node"],
    moduleNameMapper: {
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    },
    moduleDirectories: ["node_modules", "src"],
    verbose: true,
};
