// Scraper Controller
// ============================
var db = require("../models");
var scrape = require("../scripts/scrape");

// Scrape New York Times & Insert Into Database
module.exports = {
  scrapeHeadlines: function(req, res) {

    return scrape()
      .then(function(articles) {

        return db.Headline.create(articles);
      })
      .then(function(dbHeadline) {
        if (dbHeadline.length === 0) {
          res.json({
            message: "No new articles today. Check back tomorrow!"
          });
        }
        else {

          // New Articles #
          res.json({
            message: "Added " + dbHeadline.length + " new articles!"
          });
        }
      })
      .catch(function(err) {
     
        res.json({
          message: "Scrape complete!!"
        });
      });
  }
};
