install:
	npm i

dev: install
	npm run dev

prod: install
	npm run build
	npm run preview