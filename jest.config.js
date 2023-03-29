module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    "setupFilesAfterEnv": [
        "<rootDir>/setupTests.js"
    ],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|svg|ttf|woff|woff2)$': 'identity-obj-proxy',
    }
}