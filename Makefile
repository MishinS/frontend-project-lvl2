
lint:
	npx eslint .
test:
	npm run test
genDiff:
	./bin/gendiff.js ./src/__fixtures__/fileTree1.yaml ./src/__fixtures__/fileTree2.yaml
genStylish:
	./bin/gendiff.js ./__fixtures__/file1.json ./__fixtures__/file2.json -f stylish

