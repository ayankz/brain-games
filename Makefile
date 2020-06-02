install:
	npm install


brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

brain-even:
	node src/bin/brain-even.js

brain-calc:
	node src/bin/brain-calc.js

