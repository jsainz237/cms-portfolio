schema:
	cd @portfolio/cms-studio && dotenv -e ../../.env -- npx sanity schema extract
	cp @portfolio/cms-studio/schema.json @portfolio/portfolio-web/src/sanity/schema.json

typegen:
	mv @portfolio/portfolio-web/src/sanity/schema.json @portfolio/portfolio-web/schema.json
	cd @portfolio/portfolio-web && dotenv -e ../../.env -- npx sanity typegen generate
	mv @portfolio/portfolio-web/sanity.types.ts @portfolio/portfolio-web/src/sanity/types.ts
	mv @portfolio/portfolio-web/schema.json @portfolio/portfolio-web/src/sanity/schema.json
