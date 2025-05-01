export default function(eleventyConfig) {
	dir: {
		input: "src"
		output: "docs"
	}
	eleventyConfig.addPassthroughCopy("src/c");
	eleventyConfig.addPassthroughCopy("src/f");
};
