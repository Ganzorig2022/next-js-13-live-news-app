## 1 - Creating new project with tailwindcss & typescript

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
```

## 2 - Preparing project

1. delete "pages/\_app.tsx and index.tsx"
2. next.config.js dr experimental: { appDir: true, },
3. "/app/page.tsx" folder/file uusgene.

## 3 - Add local repo to remote using terminal

https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github

1. git add . git commit -m "msg"
2. git remote add origin https://github.com/Ganzorig2022/next-js-13-live-news-app.git
3. git remote -v (for checking)
4. git push --set-upstream origin main

## 4 - Install HeroIcons

```bash
npm i @heroicons/react
```

## 5 - Dark Mode

1. className = 'dark:text-orange-400'. DARK gej bichne className dr...

## 6 - Constant file ([array])

"/constants.ts" - string-iin array uusgew.
"/typings.d.ts" - torliig ni zaaw.

## 7 - Fetch News JSON from (mediastack.com)

https://mediastack.com/

1. "/typings.d.ts" - mediastack-aas awah JSON-iin torliig ni zaaw.
2. '/lib/fetchNews.ts'
3. Install graphql-request package
   https://www.npmjs.com/package/graphql-request

```bash
npm add graphql-request graphql
```

4. https://mediastack.com/ -d SIGNUP hiine.
5. API_KEY-ig ni ".env.local" dotroo huulna.

## 8 - StepZen (uild GraphQL Easily Optimize & Scale GraphQL Automatically)

1. https://stepzen.com/-d SIGNUP hiine.
   https://stepzen.com/getting-started
2. API_KEY-ig ni ".env.local" dotroo huulna.
3. Install stepzen

```bash
npm install -g stepzen
```

4. terminal dr init hged. Asuult asuuwal ENTER darna.

```bash
stepzen init
```

5.
