install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

test-coverage:
	npm test -- --coverage --coverageProvider=v8

link:
	npm link

genDiff:
	node ./bin/gendiff.js ./src/__fixtures__/file1.yml ./src/__fixtures__/file2.yml

test:
	npm run test

test-watch:
	npm run testWatch

genPlain:
	node ./bin/gendiff.js ./src/__fixtures__/fileTree1.json ./src/__fixtures__/fileTree2.json -f plain

genStylish:
	node ./bin/gendiff.js ./src/__fixtures__/fileTree1.json ./src/__fixtures__/fileTree2.json -f stylish

genJson:
	node ./bin/gendiff.js ./src/__fixtures__/fileTree1.json ./src/__fixtures__/fileTree2.json -f json
