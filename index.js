const browsers = require("./browserslist.js");

module.exports = {
  modern: browsers.modern.join(", "),
  regular: [...browsers.regular, ...browsers.modern.map(browser => `not ${browser}`)].join(", "),
  old: ["cover 100%", ...browsers.regular].join(", not ")
};
