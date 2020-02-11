import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import routes from "./Routes";
import Nav from "./components/Navbar";

class App extends React.Component {
  constructor(){
    super()
  }

  render(){
    return (
      <HashRouter>
    <div>
      <Nav/>
      {routes}
    </div>
    </HashRouter>
  );
  }
}
export default App;
