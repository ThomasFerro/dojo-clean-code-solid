module.exports = {
	collectCoverageFrom: [
		"src/**/*.ts",
		"!<rootDir>/node_modules/",
		"!<rootDir>/path/to/dir/"
	],
	globals: {
		'ts-jest': {
			tsConfig: 'tsconfig.json'
		}
	},
	moduleFileExtensions: [
		'ts',
		'js'
	],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest'
	},
	testMatch: [
		'**/test/**/*.test.ts'
	],
	testEnvironment: 'node'
};