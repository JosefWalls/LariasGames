import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from "./components/Landing";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import {Link, HashRouter} from "react-router-dom";

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      background: "backgroundOne"
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', () => {
      if(window.scrollY < 1500){
        this.setState({background: "backgroundOne"})
      }
      if(window.scrollY > 1500){
        this.setState({background: "backgroundTwo"})
      }
      if (window.scrollY > 2800){
        this.setState({background: "backgroundThree"})
      }
    })
  }


  render(){
    return (
      <HashRouter>
    <div className={this.state.background}>
      <div className="navBar">
        <h2>Larias Games</h2>
        <h6>About</h6>
        <h6>Portfolio</h6>
        <h6>Contact</h6>
      </div>
      <Landing />
      <About />
      <Portfolio />
      <Contact />
    </div>
    </HashRouter>
  );
  }
}
export default App;
