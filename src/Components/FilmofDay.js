import React from 'react';
import { Card } from 'react-bootstrap'


class FilmofDay extends React.Component {

  render() {
    console.log('city Movies ', this.props);

    return (
      <>
        <Card id="moviecard" style={{ width: "18rem", border: 'solid' }} >
          <Card.Body>
            <Card.Img src={this.props.movie.image_url} />
            <Card.Title>Title: {this.props.movie.title}</Card.Title>
            <Card.Text>Date Of Release: {this.props.movie.release_date} </Card.Text>
            <Card.Text>Overview: {this.props.movie.overview}</Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
}
export default FilmofDay;
