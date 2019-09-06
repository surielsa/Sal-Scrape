// scrape script
// =============

// Axios & Cheerio
var axios = require("axios");
var cheerio = require("cheerio");

// Scrape Webesite Function
var scrape = function () {
  return axios.get("http://www.nytimes.com").then(function (res) {
    var $ = cheerio.load(res.data);
    console.log("scraping");

    // Article Info Array
    var articles = [];

    // Find & Looop Through Each Articles Element
    $("div.css-1100km").each(function (i, element) {

      // Grab Headline Text From Story Heading Class
      var head = $(this)
        .find("h2")
        .text()
        .trim();

      // Grab Article Link
      var url = $(this)
        .find("a")
        .attr("href");

      // Then we grab any children with the class of summary and then grab it's inner text
      // We store this to the sum variable. This is the article summary

      // Grab inner text from summary class
      var sum = $(this)
        .find("p")
        .text()
        .trim();

     
      if (head && sum && url) {
      
        var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
        var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

        // Initialize and Push To Articles Array

        var dataToAdd = {
          headline: headNeat,
          summary: sumNeat,
          url: "https://www.nytimes.com" + url
        };

        articles.push(dataToAdd);
      }
    });
    return articles;
  });
};

// Export
module.exports = scrape;
