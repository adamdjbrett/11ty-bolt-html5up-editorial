module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addFilter("absolute_url", function(value) {
    const baseUrl = this.ctx.site.baseurl || "";
    if (!value) return baseUrl || "/";
    return `${baseUrl}${value.startsWith('/') ? value : '/' + value}`;
  });

  eleventyConfig.addFilter("relative_url", function(value) {
    const baseUrl = this.ctx.site.baseurl || "";
    if (!value) return baseUrl || "/";
    return `${baseUrl}${value.startsWith('/') ? value : '/' + value}`;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};
