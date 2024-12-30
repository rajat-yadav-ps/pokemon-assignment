module.exports = {
  preset: 'react-scripts', // Ensure the configuration matches CRA setup
  testEnvironment: 'jsdom', // Default for React testing
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // Setup file for global configurations
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Transform JS/JSX files using Babel
    '^.+\\.tsx?$': 'ts-jest', // Optional: if you are using TypeScript
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy', // Mock styles for testing
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/src/__mocks__/fileMock.js', // Mock static files
  },
  testPathIgnorePatterns: ['/node_modules/', '/build/'], // Ignore test paths for these directories
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'], // Supported file extensions
  collectCoverage: true, // Enable code coverage reporting
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}', // Specify which files to collect coverage for
    '!src/index.js', // Exclude index.js from coverage
    '!src/serviceWorker.js', // Exclude service worker
  ],
  coverageReporters: ['text', 'lcov'], // Choose coverage reporters
  testMatch: [
    '**/src/**/*.{test,spec}.{js,jsx,ts,tsx}', // Use .test or .spec extensions for test files
  ],
};
