import React from 'react';
import FilmofDay from './FilmofDay.js'
import '../App.css';



class Film extends React.Component {

    render() {   
      return  (
        <>
        <div id = 'films'>
          <h3>Films:</h3>
          {
            this.props.film.map((movie, index) => (
              <FilmofDay key={index} movie={movie}  />
               ))
          }
          </div>
        </>
      )
    }
  }
  export default Film;
  
 