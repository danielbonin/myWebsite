module.exports = function(eleventyConfig) {
  // Copy your assets folder (CSS, JS, Images) directly to the output
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: ".",          // Look at your current root folder for files
      output: "_site"      // Keep this default; the git hook handles routing it
    }
  };
};