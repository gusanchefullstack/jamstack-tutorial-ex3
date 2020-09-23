const { isModuleDeclaration } = require("babel-types");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/js");
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};