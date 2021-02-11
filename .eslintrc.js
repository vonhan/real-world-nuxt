module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: "babel-eslint"
	},
	extends: ["plugin:vue/essential",
		"eslint:recommended", "plugin:nuxt/recommended"],
	plugins: [],
	// add your custom rules here
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "windows"],
		quotes: ["error", "double"],
		semi: ["error", "never"]
	}
}
