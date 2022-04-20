import React from 'react';
import axios from 'axios';
import Header from './Header.js';
import Main from './Main.js';
import CityRender from './CityRender.js';
import Footer from './Footer.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      // cityMap: ''
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
    let cityName = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
    let dataFromAPI = await axios.get(cityName);
    this.setState({
      cityData: dataFromAPI.data[0]
    });
    let weatherURL = `${process.env.REACT_APP_SERVER}`
    let weatherData = await axios.get();
    
    console.log('cityData', this.state.cityData);
  }

  render() {
    return (
      <>
        <Header />
        <Main
          handleExploreClick={this.handleExploreClick}
          handleCityInput={this.handleCityInput}
          cityData={this.state.cityData}
        />          
        <Footer />
      </>
    )
  }
}

export default App;