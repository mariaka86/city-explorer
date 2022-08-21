import React from 'react';
import{Card} from 'react-bootstrap'

class WeatherDay extends React.Component {

  render() {
    console.log('weather day: ', this.props);
   
    return (
      <>
      <Card>
      <Card.Text>
        <p>Date: {this.props.day.date}</p>
        <p>Temp: {this.props.day.temp}</p>
        <p>Max Temp : {this.props.day.max_temp} </p>
        <p> Min Temp : {this.props.day.min_temp}</p>
        <p>Description: {this.props.day.description}</p>
        


        <p>{this.props.day.icon}</p>
      </Card.Text>
        </Card>
      </>
    )
  }
}
export default WeatherDay;
