// jest.config.ts
import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'json-summary'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!astronomia)'],
  testPathIgnorePatterns: ['<rootDir>/dist'],
  collectCoverage: true,
  coverageDirectory: 'jest/coverage',
  testTimeout: 30000,
};

export default config;
