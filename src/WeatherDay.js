import React from 'react';
import { Card } from 'react-bootstrap'
import './App.css'

class WeatherDay extends React.Component {

  render() {
    console.log('weather day: ', this.props);

    return (
      <>
        <Card id='forecast' style={{ width: '18rem', border: 'solid'}}>
          <Card.Title>Date: {this.props.day.date}</Card.Title>
          <Card.Body>
            <Card.Text>Temp: {this.props.day.temp}</Card.Text>
            <Card.Text>Max Temp : {this.props.day.max_temp} </Card.Text>
            <Card.Text> Min Temp : {this.props.day.min_temp}</Card.Text>
            <Card.Text>Description: {this.props.day.description}</Card.Text>
            <Card.Img src={this.props.day.icon} />
          </Card.Body>
        </Card>
      </>
    )
  }
}
export default WeatherDay;
