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

let readme = `# Better browserslist

## Why?

Depending on your babel setup, you won't have the same bundle same at the end. A big part of every builds are transpiled such as arrow functions. But nowadays, a lot of browsers supports those features.

Here is an example of different transpilations of a same input file with different targets in their babel configuration and the related coverage of this target among every browsers based on [browserslist](https://github.com/browserslist/browserslist).

## Results

`;

const initSize = fs.readFileSync("./inputcode.js").toString().length;

readme += `[source file](./inputcode.js) length: _**${initSize}**_ chars`;

for (let target in targets) {
  const size = lines(target, targets[target]);
  readme += `

### ${target}

- browserslist query: \`${targets[target]}\`
- browser coverage: _**${cut(browserslist.coverage(browserslist(targets[target])))}%**_
- [output file](./build/${target}.js): _${size} chars_ **(x${cut(size / initSize)})**
`;
}

readme += `

## How to use

\`\`\`js
const { modern, regular, old } = require('better-browserslist');

// You can use one of those config in your own babel config.
\`\`\`
`;

fs.writeFileSync("./README.md", readme);
