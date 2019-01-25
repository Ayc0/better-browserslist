const fs = require("fs");
const browserslist = require("browserslist");
const { transformFileSync } = require("@babel/core");

const browsers = require("./browserslist.js");

const targets = require("./targets");

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
const { modern, regular, regular_strict, not_modern, not_regular, old, oldest, defaults } = require('better-browserslist');
\`\`\`

You can use one of those config in your own babel config.

**old** and **oldest** are respective aliases to _regular_strict_ and _not_regular_

I recommend using **modern**, **old** or **older**.
`;

fs.writeFileSync("./README.md", readme);
