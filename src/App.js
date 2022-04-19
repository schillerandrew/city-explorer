import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      mapImage: ''
    };
  };

  handleCityInput = async (e) => {
    e.preventDefault();
    this.setState({
      city: e.target.value
    })
  }

  handleExploreClick = async (e) => {
    e.preventDefault();
    if (!this.state.cityData.lat) {
        let cityName = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
        let cityData = await axios.get(cityName);
        this.setState({
          cityData: cityData.data[0]
        });
      } else {
      let cityMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=18`;
      let mapImage = axios.get(cityMap);
      this.setState({
        mapImage: mapImage
      })
    }
  }

  render() {
    return (
      <>
        <h1>City Explorer</h1>
        <Form onSubmit={this.handleExploreClick} onInput={this.handleCityInput}>
          <Form.Control type="text" placeholder="Enter in a city" />
          <Button type="submit">Explore!</Button>
        </Form>
        <ListGroup>
          <ListGroup.Item>{this.state.cityData.display_name}</ListGroup.Item>
          <ListGroup.Item>{this.state.cityData.lat}</ListGroup.Item>
          <ListGroup.Item>{this.state.cityData.lon}</ListGroup.Item>
        </ListGroup>
        <Card>
          <img src={this.state.mapImage} />
        </Card>
      </>






    )
  }
}

export default App;