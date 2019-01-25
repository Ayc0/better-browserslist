const targets = require("./targets");

module.exports = {
  modern: targets.modern,
  regular: targets.regular,
  regular_strict: targets.regular_strict,
  not_modern: targets.not_modern,
  not_regular: targets.not_regular,
  old: targets.regular_strict,
  oldest: targets.not_regular,
  defaults: targets.defaults
};
