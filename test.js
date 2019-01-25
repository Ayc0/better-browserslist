const fs = require("fs");
const browserslist = require("browserslist");
const { transformFileSync } = require("@babel/core");

const browsers = require("./browserslist.js");

const targets = {
  modern: browsers.modern.join(", "),
  regular: browsers.regular.join(", "),
  not_modern: ["cover 100%", ...browsers.modern].join(", not "),
  not_regular: ["cover 100%", ...browsers.regular].join(", not "),
  default: "defaults"
};

const config = bl => ({
  presets: [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        targets: bl
      }
    ]
  ]
});

const lines = type => {
  const code = transformFileSync("./inputcode.js", config(targets[type])).code;
  // console.log(code);
  fs.writeFile(`./build/${type}.js`, code, () => {});
  return code.length;
};

const cut = nb => parseInt(nb * 100) / 100;

console.log("source file length: " + fs.readFileSync("./inputcode.js").toString().length + " chars");

for (let target in targets) {
  console.group(target);
  console.log("browserslist query:", targets[target]);
  console.log("browser coverage: " + cut(browserslist.coverage(browserslist(targets[target]))) + "%");
  console.log(lines(target, targets[target]) + " chars");
  console.log("");
  console.groupEnd();
}
