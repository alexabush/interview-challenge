## Weather App

### Summary
1. Create-React-App front end consisting of 3 components. Displays weather data. Runs on `localhost:3000` by default and queries `localhost:3001/api/` for data.
2. Express server, simple REST api with a single 'GET' endpoint  at `/api`. Runs on `localhost:3001` by default.

### Instrutions
Use `npm run start-dev` to start both server and client apps. Alternatively, `npm run start` and `npm run client` can be run in separate terminal windows.

### Comments
I use `generateData.js` to make write dummy JSON data to `weather.json`. Writing/changing the JSON manually also works.

Data is modeled to so that `weeks` and `days` are independent sub-units. The data associated with each `week` and `day` is pretty simple, but could easily be extended to include more nuanced data points (humidity, etc). Likewise, we could add an additional `month` or `year` layer to the model.