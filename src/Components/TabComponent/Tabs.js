import React from 'react';
import FirstTab from '../AllTabs/FirstTab'
import SecondTab from '../AllTabs/SecondTab';
import '../../App.css'
const Tabs = () => {
     return (
        <div className= "Tabs">
            <FirstTab/>

            <SecondTab/>
        </div>
    );
}; 

export default Tabs;