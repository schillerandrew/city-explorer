import React from 'react';
import axios from 'axios';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Alert from 'react-bootstrap/Alert';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      // cityMap: ''
      weatherData: [],
      moviesData: [],
      // weatherReveal: false,
      // moviesReveal: false,
      // reveal: false,
      error: false,
      errorMessage: ''
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
    try {
      let cityName = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
      let cityDataFromAPI = await axios.get(cityName);
      this.setState({
        cityData: cityDataFromAPI.data[0]
      });
      this.handleWeather();
      this.handleMovies();
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `Error occured: ${error.response.status}`
      })
    }
  }

  handleWeather = async () => {
    let weatherURL = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.city}`;
    let weatherDataFromAPI = await axios.get(weatherURL);
    this.setState({
      weatherData: weatherDataFromAPI.data,
      // reveal: true
    });
  }

  handleMovies = async () => {
    let moviesURL = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.city}`;
    let moviesDataFromAPI = await axios.get(moviesURL);
    this.setState({
      moviesData: moviesDataFromAPI.data,
      // reveal: true
      // weatherReveal: true
    });
  };

  render() {
    console.log('weather data', this.state.weatherData);
    console.log(this.state.reveal);
    // console.log('weather reveal?', this.state.weatherReveal);
    console.log('movies data', this.state.moviesData);
    // console.log('movies reveal?', this.state.moviesReveal);
    return (
      <>
        <Header />
        {
          this.state.error
            ?
            <Alert
            variant='warning'
            >
            {this.state.errorMessage}
            </Alert>
            :
            null
        }
        <Main
          handleExploreClick={this.handleExploreClick}
          handleCityInput={this.handleCityInput}
          cityData={this.state.cityData}
          weatherData={this.state.weatherData}
          // reveal={this.state.reveal}
          // weatherReveal={this.state.weatherReveal}
          moviesData={this.state.moviesData}
          // moviesReveal={this.state.moviesReaveal}
        />
        <Footer />
      </>
    )
  }
}

export default App;