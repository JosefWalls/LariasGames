import React from 'react';
import './../App.css';
import Landing from "./Landing";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import {Link}from "react-scroll";

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
      if(window.scrollY >= 2000){
        this.setState({background: "backgroundTwo"})
      }
      if (window.scrollY > 3600){
        this.setState({background: "backgroundThree"})
      }
    })
  }


  render(){
    return (
    <div className={this.state.background} id="Main">
      <div className="navBar">
        <Link to="Main" smooth={true} duration={1000}>
          <h2>Larias Games</h2>
        </Link>
        <Link to='About' smooth={true} duration={1000}>
          <h6>About</h6>
        </Link>
        <Link to="Portfolio" smooth={true} duration={1000}>
          <h6>Portfolio</h6>
        </Link>
        <Link to="Contact" smooth={true} duration={1000}>
          <h6>Contact</h6>
        </Link>
        <h6>Admin</h6>
      </div>
      <Landing/>
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
  }
}
export default App;
