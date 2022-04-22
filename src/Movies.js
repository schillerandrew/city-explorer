import React from 'react';
import Card from 'react-bootstrap/Card';

class Movies extends React.Component {

  render() {
    return (
      <>
        <Card.Text>{this.props.moviesData[0].title}</Card.Text>
        <Card.Text>{this.props.moviesData[0].overview}</Card.Text>
        <Card.Text>{this.props.moviesData[0].release_date}</Card.Text>
        <Card.Text>{this.props.moviesData[0].popularity}</Card.Text>
        <Card.Text>{this.props.moviesData[0].vote_average}</Card.Text>
        <Card.Text>{this.props.moviesData[0].vote_count}</Card.Text>
      </>
    )
  }
}

export default Movies;