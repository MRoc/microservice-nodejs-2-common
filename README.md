# Common

## Publishing

```
git add .
git commit
npm version patch
npm run clean
npm run build
npm publish
```

## Setup History

```
npm init -y
npm login
npm publish --access public
npx tsc --init
npm install typescript del-cli --save-dev
```

From tsconfig.json, uncomment the following lines:

```
"declaration": true
"outDir": "./build"
```


In package.json, add the scripts points:

```
  "scripts": {
    "clean": "del-cli ./build/*",
    "build": "npm run clean && tsc"
  },
  "files": [
    "build/**/*"
  ],
```

In package.json, add the entry points:

```
  "main": "./build/index.js",
  "types": "./build/index.d.js",
```


Install dependencies

```
npm install express express-v
alidator cookie-session jsonwebtoken @types/cook
ie-session @types/express @types/jsonwebtoken
```