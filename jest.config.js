module.exports = {
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': '<rootDir>/src/test/mocks/styleMock.js',
		'\\.(svg)$': '<rootDir>/src/test/mocks/styleMock.js',
	},
	moduleDirectories: ['node_modules', '../src/test']
}
