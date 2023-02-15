import React from 'react';
import { Card } from 'react-bootstrap'


class FoodDay extends React.Component {

  render() {
    console.log('restaurants: ', this.props);

    return (
      <>
        <Card id="foodcard" style={{ width: "18rem", border: 'solid' }} >
          <Card.Body>
            <Card.Img src={this.props.day.image_url} />
            <Card.Title>Name: {this.props.day.name}</Card.Title>
            {/* <Card.Text>Address: {this.props.day.location.display_address} </Card.Text> */}
            <Card.Text>Hours: {!this.props.day.is_closed ? 'Open': 'Closed'}</Card.Text>
            <Card.Text>Rating: {this.props.day.rating}</Card.Text>
            <Card.Text>Price: {this.props.day.price|| 'Not Available'}</Card.Text>

          </Card.Body>
        </Card>
      </>
    )
  }
}
export default FoodDay;
