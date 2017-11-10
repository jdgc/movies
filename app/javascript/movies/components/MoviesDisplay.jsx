import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';

class MoviesDisplay extends React.Component {
  constructor () {
    super();
    this.state = {
      movie: {}
    };
  }

    fetchMovie (id) {
    axios.get( `api/movies/${id}` )
        .then(response => {
          this.setState({ movie: response.data });
        })
        .catch(error => {
          console.error(error);
        });
  }

   setMovieIdFromQueryString (qs) {
    this.qsParams = queryString.parse(qs);
    if (this.qsParams.movie) {
      // assign movie ID from the URL's query string
      this.movieId = Number(this.qsParams.movie);
    } else {
      this.movieId = this.props.startingMovieId;
      // update URL in browser
      this.props.history.push(`/?movie=${this.movieId}`);
    }
  }

  componentDidMount () {
    this.setMovieIdFromQueryString(this.props.location.search);
    this.fetchMovie(this.movieId);
  }

  componentWillReceiveProps (nextProps) {
    this.setMovieIdFromQueryString(nextProps.location.search);
    this.fetchMovie(this.movieId);
  }

  render () {
    const movie = this.state.movie
    const nextMovieId = movie.next_id
    const previousMovieId = movie.previous_id

return (
      <div>
        {previousMovieId &&
        <Link to={`/?movie=${previousMovieId}`}>
        Previous
        </Link>
        }
        {nextMovieId &&
        <Link to={`/?movie=${nextMovieId}`}>
        Next
        </Link>
        }
        <p>{this.state.movie.title}</p>
        <p>{this.state.movie.description}</p>
        <p>{this.state.movie.rating}</p>
      </div>
    );
  }
}

export default MoviesDisplay;
