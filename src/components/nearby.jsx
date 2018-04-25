import React from 'react';
import SingleRandomRoute from './singleRandomRoute.jsx'

class Nearby extends React.Component {

    state = {
        text: this.props.text,

    }

    handleCLick = () => {
        window.scrollTo(0, 1000)
    }



    render () {

        const opis_trasy = {
            listStyle: 'none',
        }

        return (
            <div className="main_nearby">
            <h1 className="rozwin" onClick={this.handleCLick}>{this.props.text}</h1>
                <hr/>
                <br/>
                <br/>
                {/* <img src="../images/bike.jpg" /> */}

                <ul className="random_route_list" style={opis_trasy}>
                     <li ><SingleRandomRoute image='image_1'/></li>
                    <li ><SingleRandomRoute image='image_2'/></li>
                    <li><SingleRandomRoute image='image_3'/></li>
                </ul>
            </div>

        )
    }

}

export default Nearby;