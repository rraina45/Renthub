module.exports = {
    // Use jsdom as the test environment for browser-like behavior
    testEnvironment: "jsdom",
  
    // Specify the transform to use Babel for JavaScript and JSX
    transform: {
        [`^(${esModules}).+\\.js$`]: 'babel-jest',
      },
      transformIgnorePatterns: [`node_modules/(?!(${esModules}))`],
  
    // Optionally, you can specify which file extensions Jest should look for
    moduleFileExtensions: ["js", "jsx", "json", "node"],
  
    // If using React, ensure Jest handles .jsx files correctly
    moduleNameMapper: {
        axios: 'axios/dist/node/axios.cjs',
    },
  
    // Setup for coverage reports (if needed)
    collectCoverage: true,
    collectCoverageFrom: [
      "src/**/*.{js,jsx}",
      "!src/**/*.test.{js,jsx}",
    ],
  
    // Jest globals, if needed for React testing
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  };