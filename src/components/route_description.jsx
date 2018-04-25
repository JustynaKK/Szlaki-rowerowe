import React from 'react';

class Route_description extends React.Component {

    // state = {
    //     show: 'none',
    // }

    // handleClick =() => {

    //     this.state.show == 'none' ? this.setState({show: 'block'}) : this.setState({show: 'none'});
       
    // }



    render () {

        // const desc = {
        //     display: this.state.show,

        // }

        // w divei o classname text style={desc}

        return(
            <div className='route_description'>
                <h1 >Więcej o trasie:</h1>
                <hr/>

                <div className='text_photo'>
                <div className='text' >
                   Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis.
                <br/>
                <br/>
                Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a,
                ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim.
                Phasellus fermentum in, dolor. Pellentesque facilisis.  
                <br/>
                <br/>
                Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing.
                <br/>
                <br/>
                Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat.
            
                </div>
                <div className="gallery"></div>
                </div>
               
                
            </div>
        )
    }
}

export default Route_description;
