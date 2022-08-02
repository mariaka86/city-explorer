
import './App.css';
import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

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
//getting a cors error
let url=  `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.city}&format=json`;
try{
//axios returns with location object
 let locationResponse = await axios.get(url);
console.log("City Info: ", locationResponse.data[0]);
  this.setState({
    data:locationResponse[0],
    error:''
  })
  
} catch(error){
  this.setState({
    error:error
  });
}

};
render() {
  return (
    <>
    <div className="App">
    <Form onSubmit ={this.submitCityHandler}>
      <label>
        Pick a City
        <input type= "text" onChange= {this.handleCityInput}/>
      </label>
      <button type ="submit"> Explore!</button>
    </Form>  
      </div>
      {
                    (this.state.data && !this.state.error) &&
                    <main className="erroneus">
                        <h3>{this.state.data.display_name}</h3>
                        <row>
                            Latitude: {this.state.data.latitude}<br/>
                            Longitude: {this.state.data.longitude}
                        </row>
                        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.data.latitude},${this.state.data.longitude}&zoom=12`} alt ="location map" id ="map"></img>
                    </main>
                }
                {
                    this.state.error &&
                    <main className="erroneus">
                        <h3>unable to geocode!</h3>
                        <p>
                            Error: {this.state.error.response.data.error}
                        </p>
                    </main>
                }
    </>
  );
}
};
export default App;
