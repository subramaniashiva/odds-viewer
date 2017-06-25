Odds Viewer
===================

This application lists the bets for the teams in UEFA from different exchanges. This is a demo application built in Angular 2 and Typescript.

The application initiates a dummy API request and upon success of the API request, displays randomly generated data from front-end. If the API is built in future, its quite easy to replace the API as all the API config are read from a single file.

The application is responsive and chart is not displayed in mobile view. The application uses BEM/OCSS concept for styling.

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

Setup
-----

1)  Clone this repo using the following command

`git@github.com:subramaniashiva/odds-viewer.git`


2)  Move to the repo that you have just cloned and run the following command

`npm install`

3) To start the app, run

`npm start`
  Navigate to localhost:4200 in your browser to view the app

4) To build the project for production, run

`npm run build`

5) To run unit tests for the project. (Please note that the coverage is not 100%)

`npm run test`

6) To run unit end to end for the project. (Please note that the coverage is not 100%)

`npm run e2e`


Tech Stack
----------
Following is the tech stack:

 - **Angular 4** - MVC framework to build the applicaion
 - **TypeScript** - The super set of JavaScript. Provides static typing to the js files
 - **SCSS** - Using SCSS files instead of plain CSS
 - **TSLint** - Used to lint the TypeScript code
 - **HighCharts** - Used to create charts in the application

Directory Structure
-------------------
 - **dist** - Contains the distributable version of the project. Ideally this folder gets pushed into the production server.
 - **src** - Contains the source code of the app.
 - **e2e** - Contains files related to end to end tests.

app directory
-----------------
 - **components** - Contains dumb component for the application.
 - **interfaces** - Interface / Contracts used throughout the application. 
 - **services** - Contains the business logic for the application.
 - **styles** - Contains the styles used by the application.
 - **utils** - Contains helper and utility functions for the application.

Git Flow
-------
This project uses Git Flow for developing. 
 - **master** - The main branch. Resembles the production version.
 - **develop** - The current development version of the product. Contains code that are ready to be pushed into master. 
 - **feature/x** - Feature branch, branched off from develop. To develop a new feature create new feature branch from the develop and start. Merged into develop when the feature is ready.
 - **fix/x** - Branch to fix bugs in the application. Branched off from develop and merged back when ready.

Coding Guidelines
-------
- JSDoc commenting structure is followed throughout the code. This will be useful if we want to generate documentation for the project in future.
- BEM/OCSS is followed for sass files. UI is divided into objects, components, layout and the class are prefixed with o-, c-, l- respectively. Items of the component are mentioned with __ in the class.
- Strict typing is followed in all JS files.
- API path is loaded from a separate utils file. It will easier to change the API path in future.
- Helper styles and variables like color of the application have a separate file.
- Its better to create dumb components. This will amke sure that the business logic is properly separated.

Using the application
-------
- Hover over the cell in table to know about other odds from the same bookmaker.
- Click on the Back All or Lay All header to sort the table by that column in ascending order. Sorting is similar to toggling, so if the first time it sorts in ascending order, on clicking the same column header will sort in descending order the next time.
- Click on the team name to load the historic data in a chart.
- The application is reponsive. So charts wont show in mobile view.

Future Improvements
-------
- Add real back-end.
- Increase coverage for unit testing.
- Proper error logging service.
- Making the application progressive.
