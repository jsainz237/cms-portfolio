schema:
	cd @portfolio/cms-studio && dotenv -e ../../.env -- npx sanity schema extract

typegen:
	cd @portfolio/cms-studio && dotenv -e ../../.env -- npx sanity typegen generate
	mv @portfolio/cms-studio/sanity.types.ts @portfolio/portfolio-web/src/sanity/types.ts 