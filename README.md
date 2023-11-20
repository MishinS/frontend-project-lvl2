### Hexlet tests and linter status:
[![Actions Status](https://github.com/MishinS/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/MishinS/frontend-project-lvl2/actions)
<a href="https://codeclimate.com/github/MishinS/frontend-project-lvl2/maintainability"><img src="https://api.codeclimate.com/v1/badges/eb0dbaf44d61efbd048f/maintainability" /></a>
<a href="https://codeclimate.com/github/MishinS/frontend-project-lvl2/test_coverage"><img src="https://api.codeclimate.com/v1/badges/eb0dbaf44d61efbd048f/test_coverage" /></a>

<p><h1>Difference calculator</h1></p>
This app will can help you to compaier beetween two files ext. json and yaml. Use CLI command by Node.js. The package includes 3 types of formatters: stylish, plain, json

## <p><h2>Quick start</h2></p>

First step get clone repository.

```bash
git clone https://github.com/MishinS/frontend-project-lvl2.git
```
Second step go to the project directory.

```bash
cd frontend-project-lvl2
```
Finally run the command to call help & more details.

```bash
./bin/gendiff.js -h
```
### `Stylish`

This formatter will show the whole structure of a file with '+' or '-' signs in each difference case.

Launch command with included fixtures to check it:

```bash
make genStylish
```

### `Plain`

This formatter will show each difference case in a single line, discribing the difference.

Launch command (with fixtures):

```bash
make genPlain
```

### `JSON`

Sometimes we need the raw tree to check, JSON formatter will show you the difference in JSON format.

Launch command (with fixtures):

```bash
make genJson
```

<h2>Examples</h2>

Example compaire flat files.
<a href="https://asciinema.org/a/sn1YzIkzf6Vo5dmUnW8pYZfI8" target="_blank"><img src="https://asciinema.org/a/sn1YzIkzf6Vo5dmUnW8pYZfI8.svg" /></a>

Example of tests work.
<a href="https://asciinema.org/a/9Bjp73rnu6wV2IDcgHnoHla53" target="_blank"><img src="https://asciinema.org/a/9Bjp73rnu6wV2IDcgHnoHla53.svg" /></a>

Example compaire nested files to stylish format.
<a href="https://asciinema.org/a/M9kGZz7CrsbglDUhegC8rm5Ui" target="_blank"><img src="https://asciinema.org/a/M9kGZz7CrsbglDUhegC8rm5Ui.svg" /></a>

Example compaire nested files to plain format.
<a href="https://asciinema.org/a/NAucZmsf5LVCfpYPFIl2XY5yZ" target="_blank"><img src="https://asciinema.org/a/NAucZmsf5LVCfpYPFIl2XY5yZ.svg" /></a>

Example compaire nested files to json format.
<a href="https://asciinema.org/a/PsLPL1NLAqKA4kPbxemfhBvoH" target="_blank"><img src="https://asciinema.org/a/PsLPL1NLAqKA4kPbxemfhBvoH.svg" /></a>
