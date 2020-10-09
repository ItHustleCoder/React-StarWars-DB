import React from 'react';
import Header from '../header/';
import ItemList from '../item-list/';
import PersonDetails from '../persone-details';
import RandomPlanet from '../random-planet/';
import Starship from '../starship-details/';


const App = () => {
    return (
        <div>
            <Header/>
            <RandomPlanet/>
        <div className="row mb2">
            <div className="col-md-6">
                <ItemList/>
            </div>
        </div>    
        <div className="col-md-6">
            <PersonDetails/>
        </div>

        </div>

    );
}

export default App;