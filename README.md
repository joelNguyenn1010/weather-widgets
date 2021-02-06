# Requirements
* Node.js
* API Key

For the purpose of testing for Koala, I've pushed the .env to the repo that include the API key and API URL
and of course on PROD: never push .env to the repo

# Get started

## Step 1: Install all the packages
Run:
```
npm install
```

## Step 2: Run the Application
```
npm start
```

# Introduction

* To begin with, I use Context API for state management here since it provided out of the box. I have knowledge of Redux so the code format should be similar to redux approach

* For styling, I use `styled-components` packages to do it

* API request, I use `axios` for this. One feature I like about this package is that I can capture error in global (see it in `src/api/weather.js`). 

