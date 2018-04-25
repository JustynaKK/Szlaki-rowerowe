import React from 'react';

import MapSection from './mapsection.jsx'
import Slider from './slider.jsx'

class Home extends React.Component {
    render() {
        return (
            <div>
                    <Slider />
                    <MapSection />
            </div>
        )
    }
}



export default Home;
