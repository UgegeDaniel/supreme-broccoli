import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutContextProvider } from './context/workoutsContext'; //fe-step-7-iv

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkoutContextProvider> {/**fe-step-7-iv */}
      <App />
    </WorkoutContextProvider>
  </React.StrictMode>
);


//sanity password cAm9QEMuy#mB_NK
/**
 *  Front end
 * fe-step-1 --- clean up after CRA
 * fe-step-2 --- cd frontend && npm install react-router-dom (setup sanity with 1. npm install @sanity/cli 2. sanity login 3. sanity init 4. cd studio 5. sanity start)
 * fe-step-3 --- setup routing in app.js, import and use link in components (eg. Navbar) for navigation 
 * fe-step-3a --- create pages folder (with index file) , create pages file (home, ) and use value for element prop in route
 * fe-step-4 --- create components folder (with index.js), create the componets file (Navbar, List, ListItem, Form)
 * fe-step-5 --- fetch data from backend (go to the home file in pages and see how this is done) and output data as a list component
*  fe-step-5-gqlApollo -i --- fetch data with apollo by first installing apollo-boost react-apollo graphql(go to the home file in pages and see how this is done) and output data as a list component(go to the app.js file and see how this is done) and output data as a list component
 * fe-step-6 --- solve the cross-origin-resource-sharing problem by 1. installing and setting up cors or 2. go to frontend package.json and add "proxy": "http://localhost:4000" at the top (THIS ONLY WORKS IN DEVELOPMENT) then re-run your servers
 * THE FOLLOWING STEPS SHOULD ONLY BE USED WHEN A LOT OF COMPONENETS START TO USE AND UPDATE THE SAME STATE
 * fe-step-7 --- set up context to fetch newly added data to array of data by creating context folder and a context file
 * fe-step-8 --- setup custom hooks by creating a hooks folder with use___ files 
 * 
 * fe-step-10 --- Error handling --- go back to back end
 * fe-step-11 --- minor packages --- 
 *      1. go to public/index.html and add link for google fonts icon library . Then use the icon by adding a class name = "material-symbols-outlined" then whatever the worrd in the tag is will be translated to its icon be material symbols
 *      2. Format dates by installing date-fns with fns 
 * **/
