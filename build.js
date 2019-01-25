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

let readme = "# Better browserslist\n";

const initSize = fs.readFileSync("./inputcode.js").toString().length;

readme += `source file length: _**${initSize}**_ chars`;

for (let target in targets) {
  const size = lines(target, targets[target]);
  readme += `

## ${target}

- browserslist query: \`${targets[target]}\`
- browser coverage: _**${cut(browserslist.coverage(browserslist(targets[target])))}%**_
- [output file](./build/${target}.js): _${size} chars_ **(x${cut(size / initSize)})**
`;
}

fs.writeFileSync("./README.md", readme);
