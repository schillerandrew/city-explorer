import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {}
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
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
    let cityData = await axios.get(url);
    console.log(cityData.data[0]);
    this.setState({
      cityData: cityData.data[0]
    });
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
      </>






    )
  }
}

export default App;