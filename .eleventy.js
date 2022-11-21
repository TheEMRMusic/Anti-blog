const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

eleventyConfig.addPassthroughCopy('./src/main.css');
eleventyConfig.addPassthroughCopy('./src/normalize.css');
eleventyConfig.addPassthroughCopy('./src/assets')

eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
})

    return {
      dir: {
        //source folder you are working out of
        input: "src",
        //output folder
        output: "public"
      }
    }
  };