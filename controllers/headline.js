// Headline Controller
// ============================
var db = require("../models");

module.exports = {
  // Find, Sort & Send Headlines
  findAll: function (req, res) {
    db.Headline
      .find(req.query)
      .sort({ date: -1 })
      .then(function (dbHeadline) {
        res.json(dbHeadline);
      });
  },
  // Delete function
  delete: function (req, res) {
    db.Headline.remove({ _id: req.params.id }).then(function (dbHeadline) {
      res.json(dbHeadline);
    });
  },
  // Udate Function
  update: function (req, res) {
    db.Headline.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function (dbHeadline) {
      res.json(dbHeadline);
    });
  }
};
