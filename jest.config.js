module.exports = {
    transform: {
        ".(ts|tsx)$": "ts-jest"
    },
    testEnvironment: "node",
    verbose: true,
    testRegex: "(src/__test__/.*(test)).ts(x?)?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleDirectories: ["<rootDir>/node_modules", "<rootDir>/src"],
    collectCoverage: true,
    coverageReporters: ["json", "html", "lcov"],
};
