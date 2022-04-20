import React from 'react';
import Card from 'react-bootstrap/Card';

class CityRender extends React.Component {


  render() {
    let cityMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=12`;

    return (
      <>
        <Card>
          <Card.Title>{this.props.cityData.display_name}</Card.Title>
          <Card.Body>
            <Card.Text>{this.props.cityData.lat}</Card.Text>
            <Card.Text>{this.props.cityData.lon}</Card.Text>
            <Card.Img
              src={cityMap}
              alt={this.props.cityData.display_name}
            />
          </Card.Body>
        </Card>
      </>
    );
  };
}


export default CityRender;