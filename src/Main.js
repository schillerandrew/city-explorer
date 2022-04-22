import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CityRender from './CityRender.js';
import './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <main>
        <Form onSubmit={this.props.handleExploreClick} onInput={this.props.handleCityInput}>
          <Form.Control type="text" placeholder="Enter in a city" />
          <Button type="submit">Explore!</Button>
        </Form>
        <CityRender
          cityData={this.props.cityData}
          weatherData={this.props.weatherData}
          weatherReveal={this.props.weatherReveal}
          moviesData={this.props.moviesData}
          moviesReveal={this.props.moviesReveal}
        />
      </main>
    )
  }
}

export default Main;