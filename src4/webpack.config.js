const path = require("path");

module.exports = {
	entry: "./index.js",
	mode: "development",
	output: {
		filename: "bundle.js",
		path: path.join(__dirname,"dist/babel/")
		
	},
	module: {
		rules: [
			{
				test: /.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["env"]
					}
				}
			}
		]
	}
}