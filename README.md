#  Larvis UI


## Available Scripts

In the project directory, you can run:

### `yarn`

To install all dependencies.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Runing Larvis API 

I ran Larvis API so it could publish a port to the computer at 8080, which is used for the base URL

i.e docker container run  --publish 8080:8080 so my base url is http://localhost:8080

Base URL can be changed in /middlewares/http.js

Project Structure

 - Larvis UI is a react and redux project
 - The src folder houses all other folders.
 - All components are in the /components folder
 - Middleswares in /middlewares. i made 3 major ones, Thunk, dataCaching middleware, http request on top of the JS native fetch API.
   The data chaching middleware is just to imporve perfomance of the UI, to avoid calling some end points that returns large data over and over again e.g /acquisitions endpoint.
 -  Actions folder contains all the actions creators and actions to be dispatched separated in differant files for scalability.
 -  Reducers are in the reducers folder separated into different files for scalability.
 -  Redux Store initialization is done in the store folder
 -  Custom hooks are written in the hooks folder
 -  Helpers functions in the helpers folder

 The UI has a Home, users, acquisitions and a login page. all the pages that requires authetication are protected.


 Imporvement for Larvis API.

 1. some endpoint in  Larvis API suffers from underfecthing. e.g user infomation - one request is made to get the auth token, another is made to get the authenticated user informantion the two can be grouped together to safe one request trip to the server.

 2. Some endpoints eg /acquisions returns to much data, an array of 300 items which could be a problems on the frontend. Problems rendering on the fronted and also the, the frontend has to save the array in memory which could be an issue for low memory devices. An imporvement is to provide a form of pagination.
 i was able to solve rendering problems by chunking the big array into differnt batches and render them batch by bactch.

 3. As Larvis API scales i would advice a GraphQL API, probably on top of the Restful API. this solves the problems of over fetching and under fetching, give the frontend the flexibility of querying exactly what it needs. 

 4. An API documentation tool would be nice.


 Thank you!



