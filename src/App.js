
import './App.css';
import React from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
    city: event.target.value
  });
}
//get location data
submitCityHandler= async (event)=> {
event.preventDefault();

//adding loc iq url
//getting a cors error
let url=(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.city}&format=json`);
try{
//axios returns with location object
 let locationResponse = await axios.get(url);
console.log("City Info:", locationResponse.data[0]);
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
    <form onSubmit ={this.submitCityHandler}>
      <label>
        Pick a City
        <input type= "text" onChange= {this.handleCityInput}/>
      </label>
      <button type ="submit"> Explore!</button>
    </form>  
      </div>
      {
                    (this.state.data && !this.state.error) &&
                    <main className="erroneus">
                        <h3>{this.state.cityData.display_name}</h3>
                        <Row>
                          <Col>
                            Latitude: {this.state.cityData.lat}<br/>
                            Longitude: {this.state.cityData.lon}
                            </Col>
                        </Row>
                        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.data.lat},${this.state.data.lon}&zoom=12`} alt ="location map" id ="map"></img>
                    </main>
                }
                {
                    this.state.error &&
                    <div className="erroneus">
                        <h4>unable to geocode!</h4>
                        <p>
                            Error: {this.state.error.response.data.error}
                        </p>
                    </div>
                }
    </>
  );
}
};
export default App;
