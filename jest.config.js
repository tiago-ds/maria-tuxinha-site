const { pathsToModuleNameMapper } = require("ts-jest");

const { compilerOptions } = require("./tsconfig.spec.json");

module.exports = {
  preset: "jest-preset-angular",
  coveragePathIgnorePatterns: [],
  snapshotSerializers: [
    "jest-preset-angular/build/serializers/ng-snapshot.js",
    "jest-preset-angular/build/serializers/html-comment.js",
  ],
  transform: {
    "^.+\\.(ts|js|mjs|html|svg)$": "jest-preset-angular",
    "^.+\\.mjs$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: "<rootDir>/",
    }),
  },
  transformIgnorePatterns: ["/node_modules/(?!swiper)/"],
};
