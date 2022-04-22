import React from 'react';
import Card from 'react-bootstrap/Card';
import Weather from './Weather.js';
import Movies from './Movies.js';

class CityRender extends React.Component {

  render() {
    let cityMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=12`;

    return (
      <>
        <Card>
          <Card.Title>{this.props.cityData.display_name}</Card.Title>
          <Card.Body>
            <Card.Text><strong>latitude:</strong> {this.props.cityData.lat}</Card.Text>
            <Card.Text><strong>longitude:</strong> {this.props.cityData.lon}</Card.Text>
            {this.props.weatherReveal ? (
              <Weather
                weatherData={this.props.weatherData}
                weathearReveal={this.props.weatherReveal}
              />
            ) : null
            }
            <Card.Img
              src={cityMap}
              alt={this.props.cityData.display_name}
            />
            {this.props.moviesReveal ? (
              <Movies
                moviesData={this.props.moviesData}
                moviesReveal={this.props.moviesReveal}
              />
            ) : null
            }
          </Card.Body>
        </Card>
      </>
    );
  };
}


export default CityRender;