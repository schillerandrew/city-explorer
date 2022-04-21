import React from 'react';
import axios from 'axios';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      // cityMap: ''
      weatherData: [],
      reveal: false
    };
  };

  handleCityInput = async (e) => {
    e.preventDefault();
    this.setState({
      city: e.target.value
    });
  };

  handleExploreClick = async (e) => {
    e.preventDefault();
    let cityName = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
    let cityDataFromAPI = await axios.get(cityName);
    this.setState({
      cityData: cityDataFromAPI.data[0]
    });
    let weatherURL = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.city}`;
    let weatherDataFromAPI = await axios.get(weatherURL);
    this.setState({
      weatherData: weatherDataFromAPI.data,
      reveal: true
    });
    // console.log(this.state.weatherData);
    // console.log(this.state.reveal);
  };

  render() {
    console.log(this.state.weatherData);
    console.log(this.state.reveal);
    return (
      <>
        <Header />
        <Main
          handleExploreClick={this.handleExploreClick}
          handleCityInput={this.handleCityInput}
          cityData={this.state.cityData}
          weatherData={this.state.weatherData}
          reveal={this.state.reveal}
        />          
        <Footer />
      </>
    )
  }
}

export default App;