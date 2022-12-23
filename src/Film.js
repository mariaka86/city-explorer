import React from 'react';
import FilmofDay from './FilmofDay.js'
import './App.css';



class Film extends React.Component {

    render() {   
      return  (
        <>
        <div id = 'films'>
          <h3>Films:</h3>
          {
            this.props.film.map((day, index) => (
              <FilmofDay key={index} day={day}  />
               ))
          }
          </div>
        </>
      )
    }
  }
  export default Film;
  
 