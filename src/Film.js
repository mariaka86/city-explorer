import React from 'react';
import FilmofDay from './FilmofDay.js'




class Film extends React.Component {

    render() {   
      return  (
        <>
          <h3>Films:</h3>
          {
            this.props.film.map((day, index) => (
              <FilmofDay key={index} day={day}  />
               ))
          }
        </>
      )
    }
  }
  export default Film;
  
 