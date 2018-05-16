import React from 'react';
import bicycling from '../../images/bicycling.jpg';
import bike from '../../images/bike.jpg';
import gruzja from '../../images/gruzja.jpg';
import man from '../../images/man.jpg';
import fot3 from '../../images/fot3.jpg';
import fot4 from '../../images/fot4.jpg';
import fot5 from '../../images/fot5.jpg';
import fot6 from '../../images/fot6.jpg';
import fot7 from '../../images/fot7.jpg';
import fot8 from '../../images/fot8.jpg';

class Slider extends React.Component {

    state = {
        id: bicycling,
        photo_indeks: 0,
        name: [],
        distance: [],
        start: [],
        level: [],
        random: Math.floor(Math.random() * 128),
    };

    handleClick = (e) => {

        this.setState({
            photo_indeks: Number(e.target.dataset.id),
        }, () => {

            clearInterval(this.interval);

            this.runSlider(true);

        });


    };

    runSlider = (now = false) => {

        const photo = [bicycling, bike, gruzja, man, fot3, fot4, fot5, fot6, fot7, fot8];
        // const photo = [bicycling, bike];

        if (now) {
            this.setState({
                id: photo[this.state.photo_indeks]
            })
        }
        this.interval = setInterval(() => {

            (this.state.photo_indeks < photo.length - 1) ? this.setState({photo_indeks: this.state.photo_indeks + 1}) : this.setState({photo_indeks: 0});

            this.setState({
                id: photo[this.state.photo_indeks]
            });

        }, 4000)

    };


    render() {

        if (this.state.name.length === 0) {
            return null
        }


        let route_name = this.state.name[this.state.random];
        let distance = this.state.distance[this.state.random];
        let start = this.state.start[this.state.random];
        let level = this.state.level[this.state.random];
        let color = 'black';




        for (let i = route_name.length; i = 0; i--) {
            let white_space = route_name[i].indexOf(" ");
            if (white_space > -1) {
                route_name = route_name.slice(0, white_space)
            }
        }

        return (
            <div className="sliderSection">

                <div className="wrapper">

                    <div className={'slider'} style={{
                        backgroundImage: `url(${this.state.id})`
                    }}>
                        <div className="strong">Wyrusz w kaczą podróż!</div>
                        <div className={'circles'}>
                            <span className={'circle'} onClick={this.handleClick} style={{backgroundColor: 0 === this.state.photo_indeks ? color : 'rgba(255, 255, 255, 0.3)'}} data-id={0}></span>
                            <span className={'circle'} onClick={this.handleClick} style={{backgroundColor: 1 === this.state.photo_indeks ? color : 'rgba(255, 255, 255, 0.3)'}} data-id={1}></span>
                            <span className={'circle'} onClick={this.handleClick} style={{backgroundColor: 2 === this.state.photo_indeks ? color : 'rgba(255, 255, 255, 0.3)'}} data-id={2}></span>
                            <span className={'circle'} onClick={this.handleClick} style={{backgroundColor: 3 === this.state.photo_indeks ? color : 'rgba(255, 255, 255, 0.3)'}} data-id={3}></span>
                            <span className={'circle'} onClick={this.handleClick} style={{backgroundColor: 4 === this.state.photo_indeks ? color : 'rgba(255, 255, 255, 0.3)'}} data-id={4}></span>
                            <span className={'circle'} onClick={this.handleClick} style={{backgroundColor: 5 === this.state.photo_indeks ? color : 'rgba(255, 255, 255, 0.3)'}} data-id={5}></span>
                            <span className={'circle'} onClick={this.handleClick} style={{backgroundColor: 6 === this.state.photo_indeks ? color : 'rgba(255, 255, 255, 0.3)'}} data-id={6}></span>

                        </div>
                    </div>

                    <div className="random_main_page">
                        <h3>Trasa na dziś:</h3>
                        <div className="picture"></div>
                        <div className="description">
                            <h2>{route_name}</h2>
                            <ul>
                                <li><span>Start:</span> {start}</li>
                                <li><span>Dystans:</span> {distance}km</li>
                                <li><span>Poziom:</span> {level}</li>
                            </ul>
                            <hr/>
                            <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non
                                felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et
                                ligula...</p>

                        </div>
                        {/*<button>Zobacz więcej propozycji</button>*/}
                    </div>


                </div>

            </div>)
    }

    componentDidMount() {

        this.runSlider();


        fetch(`https://szlaki-rowerowe-api.herokuapp.com/routes`)
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                } else {
                    throw new Error("Błąd sieci")
                }
            })
            .then(data => {
                let tab = [];
                let tab2 = [];
                let tab3 = [];
                let tab4 = [];

                for (let i = 0; i < data.length; i++) {

                    tab.push(data[i].name);
                    tab2.push(data[i].distance);
                    tab3.push(data[i].location);
                    tab4.push(data[i].level);
                }
                this.setState({
                    name: tab,
                    distance: tab2,
                    start: tab3,
                    level: tab4,
                })

            }).catch(err => {
            console.log(err, "Error")
        })


    }


}

export default Slider;
