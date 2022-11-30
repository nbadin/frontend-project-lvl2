### Hexlet tests and linter status:
[![Actions Status](https://github.com/nbadin/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/nbadin/frontend-project-lvl2/actions)

### Description:
Program compares two structures of json or yaml files and displays the difference.

#### Supported file extensions:
* `.json`
* `.yml` | `.yaml`

#### Supported paths:
* relative
* absolute

### Install:
1. Clone repository
```sh
$ git clone https://github.com/nbadin/frontend-project-lvl2.git ./gendiff
```

2. Change directory:
```sh
$ cd gendiff
```

3. Install dependencies:
```sh
$ make install
```

4. Build package:
```sh
$ make publish
```

5. Install system link:
```sh
$ npm link
```

### Usage

`gendiff [options] <pathToFile1> <pathToFile2>`

Options:

`-V, --version output the version number`

`-f, --format [type] Output format`

`-h, --help output usage information`

`[type]` - `stylish`, `plain`, `json`

`<pathToFile>` - path to json, yaml or ini configuration file

1. Get stylish output diff:
[![asciicast](https://asciinema.org/a/ynhcTbPZyqd7I5moXUZiixQqg.svg)](https://asciinema.org/a/ynhcTbPZyqd7I5moXUZiixQqg)

2. Get plain output diff:
[![asciicast](https://asciinema.org/a/lptZXAx1llKEfnCPpzq2vjAVm.svg)](https://asciinema.org/a/lptZXAx1llKEfnCPpzq2vjAVm)

3. Get JSON:
[![asciicast](https://asciinema.org/a/g770gEJCGf0OgZdnKhJN3euIq.svg)](https://asciinema.org/a/g770gEJCGf0OgZdnKhJN3euIq)

You can use this as a library
```js
import genDiff from '@hexlet/code';

const diff = genDiff(filepath1, filepath2);
console.log(diff);
```
