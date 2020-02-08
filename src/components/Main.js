import React from 'react';
import './../App.css';
import Landing from "./Landing";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

class App extends React.Component {
  constructor(){

    super()

    this.state = {
      background: "backgroundOne"
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', () => {
      if(window.scrollY < 1900){
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
      <Landing/>
    </div>
  );
  }
}
export default App;