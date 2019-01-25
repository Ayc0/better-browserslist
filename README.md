# Better browserslist

source file length: _**205 chars**_

## modern

- browserslist query: `firefox >= 55, and_ff >= 55, chrome >= 60, and_chr >= 60, ios >= 12, safari >= 12, samsung >= 5, and_uc >= 11.8, opera >= 47, op_mob >= 47, baidu >= 7`
- browser coverage: _**79.25%**_
- [output file](./build/modern.js): _**254 chars**_

## regular

- browserslist query: `edge >= 13, firefox >= 50, and_ff >= 50, chrome >= 49, and_chr >= 49, ios >= 9.4, safari >= 9.4, samsung >= 5, and_uc >= 11.8, opera >= 40, op_mob >= 40, baidu >= 7, not firefox >= 55, not and_ff >= 55, not chrome >= 60, not and_chr >= 60,not ios >= 12, not safari >= 12, not samsung >= 5, not and_uc >= 11.8, not opera >= 47, not op_mob >= 47, not baidu >= 7`
- browser coverage: _**7.65%**_
- [output file](./build/regular.js): _**953 chars**_

## not_modern

- browserslist query: `cover 100%, not firefox >= 55, not and_ff >= 55, not chrome >= 60, not and_chr >= 60, not ios >= 12, not safari >= 12, not samsung >= 5, not and_uc >= 11.8, not opera >= 47, not op_mob >= 47, not baidu >= 7`
- browser coverage: _**16.35%**_
- [output file](./build/not_modern.js): _**1370 chars**_

## not_regular

- browserslist query: `cover 100%, not edge >= 13, not firefox >= 50, not and_ff >= 50, not chrome >= 49, not and_chr >= 49, not ios >= 9.4, not safari >= 9.4, not samsung >= 5, not and_uc >= 11.8, not opera >= 40, not op_mob >= 40, not baidu >= 7`
- browser coverage: _**8.69%**_
- [output file](./build/not_regular.js): _**1370 chars**_

## default

- browserslist query: `defaults`
- browser coverage: _**87.34%**_
- [output file](./build/default.js): _**1370 chars**_
