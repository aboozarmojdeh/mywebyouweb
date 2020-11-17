import React, { Component } from 'react';
// import Navbar from './components/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Signin from './components/Signin/Signin';
import Home from './components/Home/Home';
import Home2 from './components/Home2/Home2';
import Home3 from './components/Home3/Home3';
import Navbartop from './components/Navbar/Navbartop';
import Colorline from './components/Colorline/Colorline';
import { Provider, connect } from 'react-redux';
// import './App.css'
// import {searchCats} from './reducers';
// import {createStore} from 'redux';
// const store=createStore(searchCats)

const App=({store})=> {
  
    return (
      
      <Provider store={store}>
      <BrowserRouter >
      <div className="App">
        <Colorline />
        <br />
        <Navbartop/>
        {/* <br /> */}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/home2" component={Home2}/>
          <Route path="/home3" component={Home3}/>
        </Switch>
      </div>
      </BrowserRouter>
      </Provider>
      
    );
  
}
export default App;