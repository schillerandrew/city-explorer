import React from 'react';
import Card from 'react-bootstrap/Card';

class Weather extends React.Component {

  render() {
    return (
      <>
        <Card.Text>The forecast for {this.props.weatherData[0].date} is a high of {Math.round(this.props.weatherData[0].highTemp)} and a low of {Math.round(this.props.weatherData[0].lowTemp)}, with {this.props.weatherData[0].clouds}% cloud coverage.
        </Card.Text>
        <Card.Text>The forecast for {this.props.weatherData[1].date} is a high of {Math.round(this.props.weatherData[1].highTemp)} and a low of {Math.round(this.props.weatherData[1].lowTemp)}, with {this.props.weatherData[1].clouds}% cloud coverage.
        </Card.Text>
        <Card.Text>The forecast for {this.props.weatherData[2].date} is a high of {Math.round(this.props.weatherData[2].highTemp)} and a low of {Math.round(this.props.weatherData[2].lowTemp)}, with {this.props.weatherData[2].clouds}% cloud coverage.
        </Card.Text>
      </>
    )
  }
}

export default Weather;