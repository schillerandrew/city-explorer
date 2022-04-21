import React from 'react';
import Card from 'react-bootstrap/Card';

class Weather extends React.Component {

  render() {
    return (
      <>
        <Card.Text>The forecast for {this.props.weatherData[0].date} is {this.props.weatherData[0].desc.toLowerCase()}.
        </Card.Text>
        <Card.Text>The forecast for {this.props.weatherData[1].date} is {this.props.weatherData[1].desc.toLowerCase()}.
        </Card.Text>
        <Card.Text>The forecast for {this.props.weatherData[2].date} is {this.props.weatherData[2].desc.toLowerCase()}.
        </Card.Text>
      </>
    )
  }
}

export default Weather;