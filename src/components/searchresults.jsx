import React from 'react';

import {Link} from 'react-router-dom';


class SearchResults extends React.Component {
    render() {

        if(this.props.data.length === 0) { return null}
        let resultArray = this.props.data;


        if(this.props.voivodeship === 'calaPolska') {
            resultArray = this.props.data;
        } else {
            resultArray = resultArray.filter( (route) => {
                return route.voivodeship === this.props.voivodeship;
            })


        }
        let tempLevel = [];
        if(this.props.level.length === 0) {
            tempLevel = resultArray.slice();
        } else {
            for(let i = 0; i< resultArray.length; i++) {
                this.props.level.forEach( (level) => {
                    if(level === resultArray[i].level)
                    {tempLevel.push(resultArray[i])}
                })
            }
        }
        resultArray = tempLevel.slice();


        let tempBikeType = [];
        if(this.props.typeOfBike.length === 0) {
            tempBikeType = resultArray.slice();
        } else {
            for(let i = 0; i< resultArray.length; i++) {
                this.props.typeOfBike.forEach( (typeOfBike) => {
                    if(typeOfBike === resultArray[i].typeOfBike)
                    {tempBikeType.push(resultArray[i])}
                })

            }
        };

        resultArray = tempBikeType.slice();

        let tempDistance = [];

        resultArray.forEach( (route) => {
            if((route.distance >  this.props.distanceMin) && (route.distance <  this.props.distanceMax ))
                    {tempDistance.push(route)}
                });


resultArray = tempDistance.slice();

let resultList = [];

        if (resultArray.length === 0) {
            resultList = (<li className={'noresult'}>
                <h4>Niestety nie znaleziono tras, które spełniają wszystkie podane kryteria wyszukiwania.</h4>
                <p>Proszę zmienić kryteria i spróbować ponownie</p>
                <img src="src/images/Kaczka_01.png" alt=""/>
            </li>)
        } else {
            resultList = resultArray.map( el => {
                return (
                    <li className={'result'}>
                <Link to={`/route/${el.id}`} style={{textDecoration: 'none', color: 'black'}}>
                    <h3>{el.name}</h3>
                    <p>Dystans: {el.distance}</p>
                    <p>Stopień trudności: {el.level}</p>
                    <p>Rodzaj aktywności: {el.typeOfBike}</p>
                    <p>Województwo: {el.voivodeship}</p>
                </Link>
                </li>)
            })
        };



           return (
               <div className="search_results">
                   <ul style={{listStyle:'none'}}>
                       {resultList}
                   </ul>

               </div>
           )
       }

    }

export default SearchResults;

