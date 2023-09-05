## Creating a ReactJS app without create-react-app

### Instructions:

1. Create a new folder for your project and `npm init -y` to create a package.json file (NodeJS must be installed)
2. Install Babel dependencies
   - Babel is a transpiler that converts ES6+ code to ES5 code
   - React uses JSX syntax (JavaScript XML) which is not supported by browsers
   - Babel converts JSX to JavaScript
   - run `npm install --save-dev @babel/core babel-loader @babel/cli @babel/preset-env @babel/preset-react` to install Babel dependencies as dev dependencies
     - `@babel/core` is the core Babel library
     - `babel-loader` is a Webpack loader that allows Babel to work with Webpack
     - `@babel/cli` is a command line interface for Babel
     - `@babel/preset-env` is a Babel preset that converts ES6+ code to ES5 code
     - `@babel/preset-react` is a Babel preset that converts JSX to JavaScript
3. Install Webpack dependencies
   - Webpack is a module bundler that bundles JavaScript files for use in a browser
   - run `npm install --save-dev webpack webpack-cli webpack-dev-server` to install Webpack dependencies as dev dependencies
     - `webpack` is the core Webpack library
     - `webpack-cli` is a command line interface for Webpack
     - `webpack-dev-server` is a development server that allows you to run your app locally (like `live-server`, `nodemon` or `npm start` in create-react-app)
4. Install HTML Webpack Plugin
   - HTML Webpack Plugin is a Webpack plugin that generates an HTML file for your app
     - run `npm install --save-dev html-webpack-plugin` to install HTML Webpack Plugin as a dev dependency
5. Install React dependencies
   - React is a JavaScript library for building user interfaces (front-end)
   - run `npm install react react-dom` to install React dependencies
     - `react` is the core React library and contains functionality for creating React components
     - `react-dom` is a React library for rendering React components in the DOM
       - entry point to the DOM and server renderers for React
       - intended to be paired with `react` library
6. Add React files
   - create `public` folder and insert `index.html`
   - within the `index.html` file, the entire React application will live inside the `div` with `id="root"`
   - create an `src` folder and insert `App.js` and `index.js`
   - `App.js` is a React component
   - `index.js` is the entry point to the React application; it renders (injected using `reac-dom`) the `App` component in the `root` element (in `index.html`)
7. Configure Babel
   - in the root folder, create a `.babelrc` file and insert the following code:
     ```json
     {
       "presets": ["@babel/preset-env", "@babel/preset-react"]
     }
     ```
   - this tells Babel to use the `@babel/preset-env` and `@babel/preset-react` presets to convert ES6+ code to ES5 code and JSX to JavaScript
8. Configure Webpack

   - Create a file named `webpack.config.js`
     - configurations to be used by Webpack when bundling the app
       - `entry` is the entry point (main file) to the app
       - `output` is the output file (bundle file) that Webpack will generate; where the bundled code will be placed
       - `target` is the target environment for the app; `web` is the default value
       - `devServer`specified development server settings
         - `port` is the port number for the development server
         - `static` specifies the directory webpack will use to serve static files
         - `open` automatically opens the app in the browser when the development server starts
         - `hot` enables Webpack Hot Module Replacement (HMR) which allows you to update the app without reloading the page; improves development experience - `liveReload` automatically update the app as you make changes
         - `resolve` specifies the file extensions that Webpack will resolve
         - `modules` rules about how Webpack will handle different files when building the app - example:
       ```javascript
       module: {
       rules: [
       {
       test: /\.(js|jsx)$/,
       exclude: /node_modules/,
       use: 'babel-loader',
       },
       ],
       },
       // tells Webpack to use babel-loader when it reaches files with .js or .jsx extensions
       ```
       - `plugin` specifies the plugins that Webpack will use
         - `HtmlWebpackPlugin` generates an HTML file for the app
         - `CleanWebpackPlugin` cleans the output directory before building the app

9. Add scripts to `package.json`
   - `build` builds the app for production
   - `start` starts the development server
10. start the development server by running `npm start`
