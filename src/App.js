import React from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Covid from './Covid';

class App extends React.Component {

  constructor(){
    super();
    this.state = { 
    data:{}
    };
  }
    componentDidMount() {
      console.log("DidMount");
      var self = this;
      axios.get("https://covid19.th-stat.com/api/open/today")
      .then(function(response){
      console.log(response.data);
      self.setState({data:response.data});
      
      },
      function(error){
      console.log(error);
      })
      }
  
  render() {
      return (
          <div>
            <Covid data = {this.state.data} />
          </div>
      )
  }
}
export default App;
