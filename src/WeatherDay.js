import React from 'react';


class WeatherDay extends React.Component {

  render() {
    console.log('weather day: ', this.props);
   
    return (
      <>
        <h3>{this.props.day.date}</h3>
        <h4>{this.props.day.description}</h4>
      </>
    )
  }
}
export default WeatherDay;
