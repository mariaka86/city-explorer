import React from 'react';
import { Card } from 'react-bootstrap'


class FilmofDay extends React.Component {

  render() {
    console.log('film of day: ', this.props);

    return (
      <>
        <Card style={{ width: "18rem", border: 'solid' }} id="moviecard">
          <Card.Body>
            <Card.Img src={this.props.day.image_url} />
            <Card.Title>Title: {this.props.day.title}</Card.Title>
            <Card.Text>Date Of Release: {this.props.day.release_date} </Card.Text>
            <Card.Text>Overview: {this.props.day.overview}</Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
}
export default FilmofDay;
