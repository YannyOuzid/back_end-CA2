import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
// import required components
import CreateShoes from './CreateShoes';
import EditShoes from './EditShoes';
import ShoesList from './ShoesList';

// this is the "main" component which sets up the React Router and respective routes
const App = () => {
  return(
    <HashRouter>
      <div>
        {/* SERVERSIDE: Link the routes to components*/}
        <Route exact path="/" component={ShoesList}/>
        {/* pass the id through the EditUser component*/}
        <Route path="/edit-shoes/:id" component={EditShoes}/>
        {/* set the path to create a new user to CreateUser component*/}
        <Route path="/create-shoes" component={CreateShoes}/>
      </div>
    </HashRouter>
  );
};

export default App;
