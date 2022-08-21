import React from 'react';
import{Card} from 'react-bootstrap'

class FilmofDay extends React.Component {

  render() {
    console.log('film of day: ', this.props);
   
    return (
      <>
      <Card>
      <Card.Text>
        <p>Title: {this.props.day.title}</p>
        <p>Overview: {this.props.day.overview}</p>
        <p>Date Of Release: {this.props.day.release_date} </p>
      </Card.Text>
        </Card>
      </>
    )
  }
}
export default FilmofDay;
