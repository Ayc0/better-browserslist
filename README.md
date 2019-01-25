# Better browserslist
source file length: _**283**_ chars

## modern

- browserslist query: `firefox >= 55, and_ff >= 55, chrome >= 60, and_chr >= 60, ios >= 12, safari >= 12, samsung >= 5, and_uc >= 11.8, opera >= 47, op_mob >= 47, baidu >= 7`
- browser coverage: _**79.25%**_
- [output file](./build/modern.js): _334 chars_ **(x1.18)**


## regular

- browserslist query: `edge >= 13, firefox >= 50, and_ff >= 50, chrome >= 49, and_chr >= 49, ios >= 9.4, safari >= 9.4, samsung >= 5, and_uc >= 11.8, opera >= 40, op_mob >= 40, baidu >= 7`
- browser coverage: _**86.91%**_
- [output file](./build/regular.js): _1033 chars_ **(x3.65)**


## not_modern

- browserslist query: `cover 100%, not firefox >= 55, not and_ff >= 55, not chrome >= 60, not and_chr >= 60, not ios >= 12, not safari >= 12, not samsung >= 5, not and_uc >= 11.8, not opera >= 47, not op_mob >= 47, not baidu >= 7`
- browser coverage: _**16.35%**_
- [output file](./build/not_modern.js): _2372 chars_ **(x8.38)**


## not_regular

- browserslist query: `cover 100%, not edge >= 13, not firefox >= 50, not and_ff >= 50, not chrome >= 49, not and_chr >= 49, not ios >= 9.4, not safari >= 9.4, not samsung >= 5, not and_uc >= 11.8, not opera >= 40, not op_mob >= 40, not baidu >= 7`
- browser coverage: _**8.69%**_
- [output file](./build/not_regular.js): _2372 chars_ **(x8.38)**


## default

- browserslist query: `defaults`
- browser coverage: _**87.34%**_
- [output file](./build/default.js): _2372 chars_ **(x8.38)**
