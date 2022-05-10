# Fizz Buzz Code Challenge  

### Installation  
This installation guide assumes that the user has already made a copy of the [git](https://git-scm.com/) repository and installed [node package manager (npm)](https://www.npmjs.com/). These scripts have not been tested against other package managers. Once the desired branch has been pulled down, the user should  
>`npm install`  

to install the dependencies. After dependency installation, the user may run either `npm start` to run the application in development mode, or `npm run local`. Run local will download serve using npm, then build and serve on the default port (3000). A user will then need to open the application on http://localhost:3000 .

## Notes on the Branch

This simple webpage was built in response to a coding challenge. Although it has some obvious omissions (almost no styling) it is designed to make addressing those omissions easy. The design leaves space for/"mocks" an API call in the RemoteDataService. And, while the applications are rudimentary, the components attempt to be re-usable and demonstrate some rough understanding of being driven by API calls. It should be easy to imagine mocking up a more RESTful/HATEOAS design by moving [src/Constants/Path](./src/Constants/Path.js) data into the [RemoteDataService](./src/RemoteDataService/RemoteDataService.js).

There are also stray console logs in [FizzBuzzEntryList.js](./src/FizzBuzzEntryList/FizzBuzzEntryList.js)

It should have a compelling automated test suite, which generates that coveted 100% line coverage report. This coverage report can be generated using
`npm run test -- --coverage`  or using the `npm run coverage` script discussed below.

command. The coverage report should be written into a [coverage file](./coverage/lcov-report/index.html).


#### What follows is the original Create-React-App readme:

## Notes on Building  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Many things came with it for free, including some basic scripts. The author has added `npm run coverage` which will launch jest's coverage and, after closing the jest runner, the script will attempt to open the generated lcov report in the default browser.

## Scripts from Create-React-App

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
