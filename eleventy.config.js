module.exports = function (eleventyConfig) {
	return {
		dir: {
			input: "src",
			output: "docs",
		}	
	},
	eleventyConfig.addPassthroughCopy("c");
	eleventyConfig.addPassthroughCopy("f");
};
