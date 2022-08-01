
import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      city:"",
      searchLocations:[],
      cityData:{},
    };
  }
// calling api
handleCityInput = (event) => {
  this.setState({
    city: event.target.value,
  });
}
//get location data
submitCityHandler= async (event)=> {
event.preventDefault();

//adding loc iq url

let url= `https://us1.locationiq.com/vq/search?key= ${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.city}&format=json`;
let locationInfo= await axios(url);
}
render() {
  return (
    <>
    <div className="App">
    <form onSubmit ={this.submitCityHandler}>
      <label>
        Pick a City
        <input type= "text" onChange= {this.handleCityInput}/>
      </label>
      <button type ="submit"> Explore!</button>
    </form>   
    </div>
    </>
  );
}
};
export default App;
