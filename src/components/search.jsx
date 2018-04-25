// import React from 'react';
//
// import SearchForm from './searchform.jsx';
// import SearchResults from './searchresults.jsx';
//
//
//
// class Search extends React.Component {
//     state={
//         data: [],
//         voivodeship: 'calaPolska',
//         easy: false,
//         medium: false,
//         difficult: false,
//         road: false,
//         mtb: false,
//         distanceMin: 0,
//         distanceMax: 1000,
//         typeOfBike: [],
//         level: [],
//
//     }
//
//     handleVoivodeshipChange = (value) => {
//         this.setState({
//             voivodeship: value
//         })
//
//     }
//
//     handleLevelSelect = (value) => {
//         console.log(value);
//         this.setState({
//             level: value
//         })
//
//     }
//
//

import React from 'react';

import SearchForm from './searchform.jsx';
import SearchResults from './searchresults.jsx';



class Search extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
    }
    state={
        data: [],
        voivodeship: (this.props.location && this.props.location.state && this.props.location.state.voivodeship) ?  this.props.location.state.voivodeship : 'calaPolska',
        // voivodeship: 'calaPolska',
        easy: false,
        medium: false,
        difficult: false,
        road: false,
        mtb: false,
        distanceMin: 0,
        distanceMax: 1000,
        typeOfBike: [],
        level: [],

    }

    handleVoivodeshipChange = (value) => {
        this.setState({
            voivodeship: value
        })

    }

    handleLevelSelect = (value) => {
        console.log(value);
        this.setState({
            level: value
        })

    }


    handleBikeTypeSelect = (value) => {
        console.log(value);
        this.setState({
            typeOfBike: value
        })

    }

    handleMinChange = (value) => {
        console.log(value);
        this.setState({
            distanceMin: Number(value)
        })

    }

    handleMaxChange = (value) => {
        console.log(value);
        this.setState({
            distanceMax: Number(value)
        })

    }


    render() {


        if(this.state.data.length === 0) {
            return null
        }

        return (
            <div className='lower'>
                <div className="wrapper search">
                    <SearchForm
                        easy = {this.state.easy}
                        medium = {this.state.medium}
                        difficult = {this.state.difficult}
                        road = {this.state.road}
                        mtb = {this.state.mtb}
                        handleVoivodeshipChange={this.handleVoivodeshipChange}
                        handleLevelSelect={this.handleLevelSelect}
                        handleBikeTypeSelect={this.handleBikeTypeSelect}
                        handleMinChange={this.handleMinChange}
                        handleMaxChange={this.handleMaxChange}
                        voivodeship={this.state.voivodeship}
                    />
                    <SearchResults
                        distanceMin = {this.state.distanceMin}
                        distanceMax = {this.state.distanceMax}
                        voivodeship={this.state.voivodeship}
                        typeOfBike={this.state.typeOfBike}
                        level={this.state.level}
                        data={this.state.data}/>
                </div>

            </div>
        )
    }

    componentDidMount() {
        fetch(`http://localhost:3000/routes`)
            .then(resp => {
                if(resp.ok) {
                    return resp.json()
                } else {
                    throw new Error("Błąd sieci")
                }
            })
            .then(data => {
                this.setState({
                    data: data
                })

            }).catch(err => {
            console.log(err, "Error")
        })
    }
}


export default Search;