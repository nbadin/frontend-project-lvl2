publish:
		npm publish --dry-run

test:
		NODE_OPTIONS=--experimental-vm-modules npx jest

lint:
	npx eslint .

install-dependencies:
	npm install

link:
	npm link