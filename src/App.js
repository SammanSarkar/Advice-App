import React from 'react';
import './App.css';
import axios from 'axios'  ;
class App extends React.Component {
  state = {advice: ''} ;

 componentDidMount(){
  this.fetchAdvice() ;
 }

 fetchAdvice = () => {
  axios.get('https://api.adviceslip.com/advice')  //advices slip json api
        .then((response) => {
          const {advice} = response.data.slip ; 
          this.setState({advice}) ; //in js rule if same name then instead of {advice : advice} just write {advice} once
        })
        .catch((error) => {
          console.log(error) ; 
        })
 }

  render(){
    const {advice} = this.state ; 
    return (
       <div className="app" >
        <div className="card">
          
            <h1 className="heading">{advice}</h1>
            {/* using font family league spartan from google fonts. link in index.html above title and css change */}
          <button className= "button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
       </div>
    );
  }
  
}

export default App;

//  In React, componentDidMount is a lifecycle method that gets called after 
//  a component has been rendered to the screen. It's part of the mounting phase
//  in the component's lifecycle. This method is commonly used to perform tasks
//  that require interaction with the browser or external APIs, such as fetching
//  data from a server, setting up event listeners, or initializing third-party libraries.

