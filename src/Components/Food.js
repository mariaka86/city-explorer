import React from 'react';
import FoodofDay from './FoodDay.js'
import '../App.css';



class Food extends React.Component {

    render() {   
      return  (
        <>
        <div id = 'food'>
          <h3>Restaurants:</h3>
          {
            this.props.food.map((day, index) => (
              <FoodofDay key={index} day={day}  />
               ))
          }
          </div>
        </>
      )
    }
  }
  export default Food;
  
 