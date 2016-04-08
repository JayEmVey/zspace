# zSpace authentication service endpoint
Authentication service endpoint based on NodeJS

## Stack
- Cryptographic algorithms using BCrypt: A native JS bcrypt library for NodeJS (https://www.npmjs.com/package/bcrypt-nodejs)
- Passport (http://passportjs.org/): authentication middleware for Node.js
- Tokenization using JSON Web Token - JWT (https://www.npmjs.com/package/jwt)
- MongoDB (https://www.mongodb.org/)
- Mongoose (http://mongoosejs.com/docs/): create mongo model schema
- Express (http://expressjs.com/)
- ReactJS (https://facebook.github.io/react/): A JavaScript library for building user interfaces
- Redux (not implement yet): 
- Webpack: A module bundler takes modules with dependencies and generates static assets representing those modules. Find the `webpack.config.js` file in this root folder for configuration
	- html-webpack-plugin: is able to generate an index.html for us and create links to our assets keeping our life simple.
	- webpack-dev-server: When webpack-dev-server is running it will watch your files for changes. We added a script that refreshes the application when a change occurs
	- CSS loader: Loading CSS requires the css-loader and the style-loader.
		- The css-loader will go through the CSS file and find url() expressions and resolve them.
		- The style-loader will insert the raw css into a style tag on your page.
	- Url loader: The limit is an argument passed to the url-loader. It tells it that images that are 25KB or smaller in size will be converted to a BASE64 string and included in the CSS file where it is defined.
- Babel: Babel is a JavaScript compiler using to compiple JSX file to JS (raw javascript). Find the `.babelrc` file in this root folder for configuration

## Installation

Browse to root folder of the project, using `npm` command as below:

```
 npm install
```

## Run

Using `npm` command:

```
npm run start
```

Try http://localhost:3000 on your web browser

## Build (production)

Using `npm` command:

```
npm run build
```