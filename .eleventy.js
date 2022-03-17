const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter("dateReadable", date => {
        return DateTime.fromJSDate(date, {
            zone: "system",
        }).setLocale('en').toLocaleString(DateTime.DATE_MED);
    });
    
    eleventyConfig.addCollection("sortByDate", function(collection) {
        return collection.getFilteredByGlob("./src/posts/*.md").sort((a, b) => {
            return b.date - a.date;
        });
    });

    eleventyConfig.addPassthroughCopy("./src/public/css/");
    eleventyConfig.addWatchTarget("./src/public/css/");
    eleventyConfig.addWatchTarget("./src/assets/img/");
    eleventyConfig.addPassthroughCopy("./src/assets/img/");
    eleventyConfig.addPassthroughCopy("./src/assets/json/");
    eleventyConfig.addWatchTarget("./src/public/js/");
    eleventyConfig.addPassthroughCopy("./src/public/js/");
    eleventyConfig.addWatchTarget("./src/assets/fontawesome/");
    eleventyConfig.addPassthroughCopy("./src/assets/fontawesome/");

    js = eleventyConfig.javascriptFunctions;

    return {
        dir : {
            input: "./src",
            output: "./build"
        }
    }
};