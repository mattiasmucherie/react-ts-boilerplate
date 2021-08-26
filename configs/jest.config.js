module.exports = {
  rootDir: '..',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'sass'],
  setupFilesAfterEnv: ['<rootDir>/configs/setuptests.ts'],
  moduleNameMapper: {
    '\\.(css|scss|less)$': '<rootDir>/configs/__mocks__/styleMock.js',
  },
}
