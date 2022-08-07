import React from 'react';
import{Card} from 'react-bootstrap'

class WeatherDay extends React.Component {

  render() {
    console.log('weather day: ', this.props);
   
    return (
      <>
      <Card>
      {/* <Card.Img
				variant="top"
				src={`/icons/${this.props.day.icon}.png`}
				style={{ width: '100px' }}
			/> */}
      <Card.Text>
        <p>{this.props.day.date}</p>
        <p>{this.props.day.temp}</p>
        <p>{this.props.day.description}</p>
        <p>{this.props.day.icon}</p>
      </Card.Text>
        </Card>
      </>
    )
  }
}
export default WeatherDay;
