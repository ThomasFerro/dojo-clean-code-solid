module.exports = {
	collectCoverageFrom: [
		"src/**/*.ts",
		"!<rootDir>/node_modules/",
		"!<rootDir>/path/to/dir/"
	],
	globals: {
		'ts-jest': {
			tsConfigFile: 'tsconfig.json'
		}
	},
	moduleFileExtensions: [
		'ts',
		'js'
	],
	transform: {
		'^.+\\.(ts|tsx)$': './node_modules/ts-jest/preprocessor.js'
	},
	testMatch: [
		'**/test/**/*.test.ts'
	],
	testEnvironment: 'node'
};