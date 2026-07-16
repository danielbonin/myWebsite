module.exports = function(eleventyConfig) {
  // Copy static asset folders directly to Caddy
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("images");

  // Format dates elegantly (e.g., "July 16, 2026")
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC" // Force UTC to avoid local timezone offset shifts
    });
  });

  // Dynamic Collection of blog posts automatically sorted by Date
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByTag("posts").sort((a, b) => {
      return a.date - b.date;
    });
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};