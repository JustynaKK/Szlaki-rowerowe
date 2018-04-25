import React from 'react';


class SingleMap extends React.Component {

    state = {
        src:`https://www.traseo.pl/mapa/${this.props.id}/m/0/i/0/g/0/`,
    }

    render () {
        return (
            <div style={{width: '60%', height: '60vh'}}>
            <iframe src={this.state.src} style={{width:"100%", height:"100%",frameborder:'5px', border:'border:4px solid black' }}>
            </iframe>
        </div>
        )
    }
}

//defolt iframe 50vw 60vh

export default SingleMap;