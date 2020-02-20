import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import routes from "./Routes";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(){
    super()
  }

  render(){
    return (
      <HashRouter>
    <div>
      {routes}
      <Footer />
    </div>
    </HashRouter>
  );
  }
}
export default App;
