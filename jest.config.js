module.exports = {
    transform: {
        ".(ts|tsx)$": "ts-jest"
    },
    testEnvironment: "node",
    verbose: true,
    testRegex: "(test/.*(test)).ts(x?)?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleDirectories: ["<rootDir>/node_modules", "<rootDir>/src"],
    collectCoverage: true,
    coverageReporters: ["json", "html", "lcov"],
};
