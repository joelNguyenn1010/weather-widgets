# Prerequisites
* Node.js
* API Key

For the purpose of testing for Koala, I've pushed the .env to the repo that include the API key and API URL

# Important

There currently 3 free API from open weather I can use: [Current Weather Data](https://openweathermap.org/current), [One Call API](https://openweathermap.org/api/one-call-api), [5 Day / 3 Hour Forecast](https://openweathermap.org/forecast5). The One Call API I can't/don't want to use it because Geographical coordinates (latitude, longitude) is required to get the data and I want to be able to get weather by city name, etc.

So I only use [Current Weather Data](https://openweathermap.org/current) to get current weather condition and [5 Day / 3 Hour Forecast](https://openweathermap.org/forecast5) 5 day forecast (this support get weather by city name)

But hopefully Koala is only look at how design and structure the code to call the Api

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

* To begin with, I use Redux for state management here. I also put Context API here as another solution for state management but commented just to let to you that I'm comfortable with any state management solution

* For styling, I use `styled-components` packages to do it

* API request, I use `axios` for this. One feature I like about this package is that I can capture error in global (see it in `src/api/weather.js`). 

* For `take-home-questions.md` test, [click here](https://github.com/joelNguyenn1010/test)

# Requirements matching

* `Shows your location's current and future weather data.`: Yes, component Weather will responsible for display the data and the weather context will use the api service to get the open weather API. I use the [5 day weather forecast](https://openweathermap.org/forecast5)
 
* `Able to search a specific location weather data.`: the Search component will be responsible for this

* `Has a dark / light mode.`: Styled-components support Theme Context to pass the light and dark data to other styled-components. The `ThemeToggle` will responsible for switching between light and dark themes.

* `Adheres to minimum AA accessibility guidelines.` : Yes I am