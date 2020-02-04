import React from 'react';
import './../App.css';
import Landing from "./Landing";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import {Link} from "react-router-dom";

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
      if (window.scrollY > 28500){
        this.setState({background: "backgroundThree"})
      }
    })
  }


  render(){
    return (
    <div className={this.state.background}>
      <div className="navBar">
        <h2>Larias Games</h2>
        <h6>About</h6>
        <h6>Portfolio</h6>
        <h6>Contact</h6>
        <Link to="/Developer/Login">
          <h6>Admin</h6>
        </Link>
      </div>
      <Landing />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
  }
}
export default App;
