import React from 'react';
import Card from 'react-bootstrap/Card';

class Movies extends React.Component {

  render() {
    return (
      <Card>
        <Card.Text>{this.props.moviesData[0].title}</Card.Text>
        <Card.Text>{this.props.moviesData[0].overview}</Card.Text>
        <Card.Text>{this.props.moviesData[0].releaseDate}</Card.Text>
        <Card.Text>{this.props.moviesData[0].popularity}</Card.Text>
        <Card.Text>{this.props.moviesData[0].avgVotes}</Card.Text>
        <Card.Text>{this.props.moviesData[0].totalVotes}</Card.Text>
        <Card.Text>{this.props.moviesData[1].title}</Card.Text>
        <Card.Text>{this.props.moviesData[1].overview}</Card.Text>
        <Card.Text>{this.props.moviesData[1].releaseDate}</Card.Text>
        <Card.Text>{this.props.moviesData[1].popularity}</Card.Text>
        <Card.Text>{this.props.moviesData[1].avgVotes}</Card.Text>
        <Card.Text>{this.props.moviesData[1].totalVotes}</Card.Text>
        <Card.Text>{this.props.moviesData[2].title}</Card.Text>
        <Card.Text>{this.props.moviesData[2].overview}</Card.Text>
        <Card.Text>{this.props.moviesData[2].releaseDate}</Card.Text>
        <Card.Text>{this.props.moviesData[2].popularity}</Card.Text>
        <Card.Text>{this.props.moviesData[2].avgVotes}</Card.Text>
        <Card.Text>{this.props.moviesData[2].totalVotes}</Card.Text>
        <Card.Text>{this.props.moviesData[3].title}</Card.Text>
        <Card.Text>{this.props.moviesData[3].overview}</Card.Text>
        <Card.Text>{this.props.moviesData[3].releaseDate}</Card.Text>
        <Card.Text>{this.props.moviesData[3].popularity}</Card.Text>
        <Card.Text>{this.props.moviesData[3].avgVotes}</Card.Text>
        <Card.Text>{this.props.moviesData[3].totalVotes}</Card.Text>
        <Card.Text>{this.props.moviesData[4].title}</Card.Text>
        <Card.Text>{this.props.moviesData[4].overview}</Card.Text>
        <Card.Text>{this.props.moviesData[4].releaseDate}</Card.Text>
        <Card.Text>{this.props.moviesData[4].popularity}</Card.Text>
        <Card.Text>{this.props.moviesData[4].avgVotes}</Card.Text>
        <Card.Text>{this.props.moviesData[4].totalVotes}</Card.Text>
        <Card.Text>{this.props.moviesData[5].title}</Card.Text>
        <Card.Text>{this.props.moviesData[5].overview}</Card.Text>
        <Card.Text>{this.props.moviesData[5].releaseDate}</Card.Text>
        <Card.Text>{this.props.moviesData[5].popularity}</Card.Text>
        <Card.Text>{this.props.moviesData[5].avgVotes}</Card.Text>
        <Card.Text>{this.props.moviesData[5].totalVotes}</Card.Text>
      </Card>
    )
  }
}

export default Movies;