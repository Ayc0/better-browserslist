const browsers = require("./browserslist.js");

module.exports = {
  modern: browsers.modern.join(", "),
  regular: browsers.regular.join(", "),
  regular_strict: [...browsers.regular, ...browsers.modern.map(browser => `not ${browser}`)].join(", "),
  not_modern: ["cover 100%", ...browsers.modern].join(", not "),
  not_regular: ["cover 100%", ...browsers.regular].join(", not "),
  defaults: "defaults"
};
