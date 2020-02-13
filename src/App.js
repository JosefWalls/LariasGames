import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import routes from "./Routes";

class App extends React.Component {
  constructor(){
    super()
  }

  render(){
    return (
      <HashRouter>
    <div>
      {routes}
    </div>
    </HashRouter>
  );
  }
}
export default App;
