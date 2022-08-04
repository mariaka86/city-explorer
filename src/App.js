
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
      error:false,
      errorMessage:"",
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
    cityData:locationResponse.data[0],
    error:false
  })
  
} catch(error){
  this.setState({
    error:error
  });
}

};
render() {
  console.log ('from state',this.state.cityData, this.state.cityData.lon, this.state.cityData.lat);

//  let stateList = this.state.locationResponse((stateName,index)=>{
//   return <li key ={index}>{stateName.name}</li>
//  })

  return (
    <>
    <div className="App">
    <form onSubmit={this.submitCityHandler}>
      <label>
        Pick a City
        <input type="text" onChange={this.handleCityInput}/>
      </label>
      <button type="submit"> Explore!</button>
    </form>  
      </div>

      {
                    (this.state.cityData && !this.state.error) &&
                    <main className="erroneus">

                        <h3>{this.state.cityData.display_name}</h3>
                        
                           <p>Latitude: {this.state.cityData.lat} </p> 
                            
                           <p> Longitude: {this.state.cityData.lon}</p>

                           <p> Weather Forecast:</p>

                        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=12`} alt ="location map" id ="map" />
                    </main>
                }
                
                {
                    this.state.error &&
                    <main className="erroneus">
                        <h4>unable to geocode!</h4>
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
