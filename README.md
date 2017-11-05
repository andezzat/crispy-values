# Values Footprints
## How to setup developer environment
1. Make sure you've got Node.js installed.
2. Navigate to Github Desktop after logging in and choose to clone `crispy-values` to your desired folder (I use `{UserFolder}\Sites\`)
3. Go to the repo's directory using your command line (I use PowerShell on Windows) and execute `npm i`, this will install all node modules needed to run this project.
4. Run `npm run dev` to start the development server, then open another instance of your shell and run `npm run build:watch` to start the Webpack build and have it watch for changes. Go to the URL the web server is hosted on. (Default: `http://localhost:3000`)
5. Happy Coding!

## Environment
This project is basically a React front-end with server-side rendering. It leverages React Router and it's run on Express.js. Webpack is used to bundle the application into a JS file for the front end, and to also bundle SASS (`.scss`) files into one styles file in CSS.

### Webpack
Webpack is the bundler of choice; it bundles up all `.scss` files into one `.css` file and does the same with `.jsx` & `.js` files; bundling them into the one `app.js` file for the client-side.

#### Configuration
Webpack has three (3) configuration files, all starting with 'webpack' and located in the root directory of the project. `webpack.common.js` contains build definition for both development and produciton. `webpack.dev.js` contains development-only build configuration. `webpack.prod.js` contains production-only configuration attributes, such as setting the `NODE_ENV` to 'production', minifying the outputted CSS file and uglifying the JS file.

#### React App
The entry point for the front-end app is `/src/client/app.js`, by using other components within the project, Webpack will know what to bundle in order to make a self-contained file that is required in the Pug view statically. This file is found in `/public/javascripts/`.

#### Styles
The entry point for styles is `/src/scss/theme.scss`. Any SASS files imported into this file will be bundled into the final `styles.css` file which is used in the `layout.pug` file. See the [Pug Views](#pug-views) section for more details.

### Express
This project was initially created using the Express application generator. The default entry point for applications scaffolded via the tool is `/bin/www`.
The `www` entry file requires the app with all its configuration from `/src/app.js`.

#### App.js
`/src/app.js` is the bread and butter of the Express.js server. It tells it what middleware to use and sets the static assets folder to `/public/`.
It imports the routes from `/src/routes/`.
It also tells Express to use Pug as its view engine, and to find the static view files in `/views/`.

### Routing
When the user sends a request to the server for the first time they will be dealing with the Express router which is defined in `/src/routes/index.jsx`. It's a static router that imports the React Router routes from `/src/client/routes.js`.

#### Routes.js
This file found in `/src/client/` contains all possible routes that the React Router needs to know about, and tells it what React component it should render.
The App component is always rendered as this is the parent component which houses the whole React application and inside it all other pages are rendered according to the route the user has chosen.

#### App.jsx
Found in `/src/client/`, this file is what renders the whole app to the `#app` HTML div element that is defined in the static Pug view.

### Front-end Things
All React components are defined in `/src/client/components/`. Each Page is also defined as a React component and can be found in `/src/client/pages/`. However, any reusable components specific to a theme or library can be found in `/lib/`. These contain basic Bootstrap components and other Spacial components (the theme of choice for this project).
SASS styles can all be found in the `/scss/` folder and they're all imported raw as is from the Spacial assets provided with the theme.

#### App Component
This is the main component that is rendered for the whole application. Inside it are the Header and Footer as they need to appear on every page. The App component conditionally renders pages based on the routes.

#### Styles
Styles are found in the `/scss/` folder and the main ones that should concern the developer are found in `/scss/custom/`.
All custom styling that did not come default in Spacial or Bootstrap will have a name prefix of `_values_`.
All styles are imported into the `/scss/theme.scss`. This is the Webpack configuration's entry point, and all `.scss` files are imported into it.

#### Pug views
Pug views can be found in `/views/`. They're basic static views that contain static files that are required to get the pages functioning properly.
`layout.pug` defines the HTML page's head and imports the required styles within. One is the Bootstrap minified CSS file and the other is the Webpack bundled `styles.css` file.
The HTML body has a block named content, `index.pug` replaces the content block with a div that has an id of `app`. This div is replaced by React in order to inject the front-end application and its components. This code can be found in `/src/client/app.jsx`.
The `layout.pug` view also imports the bundled `app.js` file which contains all React components and React Router, which are required for the user to navigate and traverse the React App once the page has loaded initially.

#### Data
Data used throughout the front-end can currently be found in the `/data` folder. This folder houses a few different data files that are plugged into a few React pages/components for content purposes.

#### Forms & Validation
This project utilises `Formsy-React` which is a great library for building React forms with built-in tools to make validation and form management easy. All form fields are located in `/src/client/components/Survey/`.

### Database
This project uses `Tedious`, Microsoft's SQL Server driver for Node.js environments.

#### Configuration
An example of a Database config for Tedious to use to connect to an instance of SQL Server can be found in `config/database_example.js`.
Make sure to copy this file as `database.js` and modify it so the settings suit the Production database. There's currently no setup for a local DB instance, but that can also be easily done.

#### Form Submission
Forms submitted via the Test are sent through a POST request made to the web server (Express), which processes this request by using Tedious to insert a new row into the SQL Server database according to the `database.js` config file in `/config/`.
