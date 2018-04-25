import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './weather.jsx';
import SingleMap from './single_map.jsx';
import Description from './description.jsx';
import Route_description from './route_description.jsx';
import Nearby from './nearby.jsx';


class ResultRoute extends React.Component {

    state = {

        location: '',
        id: '',
        name: '',
        typeOfBike: '',
        distance: '',
        duration: '',
        level: '',
        
    }



    render() {

           if (this.state.location.length === 0 && this.state.id.length === 0) {
               return null
           } 

        console.log(this.props);
        return (

            <section className = 'main_result_section'>
            <div className='wrapper'>
                 <Description location={this.state.location} name={this.state.name} typeOfBike={this.state.typeOfBike} distance={this.state.distance} duration={this.state.duration} level={this.state.level}/>
                 <div className="lower main_container">
                 <SingleMap id={this.state.id}/>
                 <Weather city={this.state.location}/> 

                 
                 </div> 
            <Route_description/>
            <Nearby text='Zobacz trasy w okolicy:'/>
            </div>
           
            </section>
            

        )
    }

    componentDidMount() {
        fetch(`http://localhost:3000/routes/${this.props.match.params.id}`)
            .then(resp => {
                if(resp.ok) {
                    return resp.json()
                } else {
                    throw new Error("Błąd sieci")
                }
            })
            .then(data => {
                console.log(data.location)
                this.setState({
                    id: data.id,    
                    location: data.location,
                    name: data.name,
                    typeOfBike: data.typeOfBike,
                    distance: data.distance,
                    duration: data.duration,
                    level: data.level, 

                })

            }).catch(err => {
            console.log(err, "Error")
        })
    }
}




export default ResultRoute;
