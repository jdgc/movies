import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import MoviesDisplay from './MoviesDisplay'

const App = (props) => (
  <Router startingMovieId={props.startingMovieId}>
    <div>
      <Route
        path='/'
        startingMovieId={props.startingMovieId}
        render={(routeProps) => <MoviesDisplay {...props} {...routeProps} />}
      />
    </div>
  </Router>
)

export default App
