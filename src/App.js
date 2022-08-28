
import './App.css';
import React from 'react';
import axios from 'axios';
import Weather from "./Weather.js"
import Card from 'react-bootstrap/Card'
import Film from './Film';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      searchLocation: [],
      cityData: {},
      lat: "",
      lon: "",
      mapPic: "",
      error: false,
      anErrorMess: "",
      weather: [],
      film: [],
    };
  }
  // calling api
  handleCityInput = (event) => {
    this.setState({
      city: event.target.value
    });
  }
  //get location data
  submitCityHandler = async (event) => {
    event.preventDefault();

    //adding loc iq url
    //getting a cors error
    try {
      //axios returns with location object

      let url = (`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.city}&format=json`);
      let locationResponse = await axios.get(url);
      console.log("City Info:", locationResponse.data[0]);
      let mapPic = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${locationResponse.data[0].lat},${locationResponse.data[0].lon}&zoom=12`

      let lat = locationResponse.data[0].lat;
      let lon = locationResponse.data[0].lon;
      this.setState({
        cityData: locationResponse.data[0],
        error: false,
        mapPic: mapPic,
        lat: lat,
        lon: lon,

      });
      this.displayWeather(lat, lon);
      this.handleFilm(lat, lon);
    } catch (error) {
      this.setState({
        error: error,
        anErrorMess: `whoops there's an error ${error.response.status}`,
      });

    }
  }
  displayWeather = async (lat, lon) => {
    try {
      const weather = await axios.get(`${process.env.REACT_APP_SERVER}/weather`,
        {
          params: {
            lat: lat,
            lon: lon,
            searchQuery: this.state.city,

          },
        }
      );
      this.setState({
        weather: weather.data,

      });
    } catch (error) {

      this.setState({
        mapPic: false,
        error: true,
        anErrorMess: `whoops there's an error ${error.response.status}`,

      });
    }
  };

  handleFilm = async (lat, lon,) => {

    try {
      const film = await axios.get(`${process.env.REACT_APP_SERVER}/movies`,
        {
          params: {
            lat: lat,
            lon: lon,
            searchQuery: this.state.city,
          },
        }
      );
      this.setState({
        film: film.data,
      });

    } catch (error) {
      this.setState({
        mapPic: false,
        error: true,
        anErrorMess: `whoops there's an error ${error.response.status}`,

      });

    }
  };


  render() {
    console.log('from state', this.state.cityData, this.state.cityData.lon, this.state.cityData.lat,);


    return (
      <>
        <header>
          <h3> Go ahead and Explore!</h3>
        </header>
        <div className="App">
          <form onSubmit={this.submitCityHandler}>
            <label>
              Pick a City:
              <input type="text" onChange={this.handleCityInput} />
            </label>
            <button type="submit"> Explore!</button>
          </form>



          {
            (this.state.cityData && !this.state.error) &&
            <>

              <Card className="erroneus" id='location'>
                <Card.Body>
                  <Card.Title> Welcome to {this.state.cityData.display_name} !</Card.Title>
                  <Card.Text>
                    Latitude: {this.state.cityData.lat}<br></br>Longitude: {this.state.cityData.lon}
                  </Card.Text>
                  <Card.Img
                    className="cardImage"
                    variant="top"
                    src={this.state.mapPic}
                    style={{ width: '35rem' }}
                  />
                </Card.Body>
              </Card>
              <Weather weather={this.state.weather} />
              <Film film={this.state.film} />

            </>

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
        </div>
      </>
    );
  }
};

export default App;
