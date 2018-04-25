import React from 'react';

class Slider extends React.Component {

    state = {
        id: 'bicycling.jpg',
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

        const photo = ['bicycling.jpg', 'bike.jpg', 'gruzja.jpg', 'man.jpg', 'fot3.jpg', 'fot4.jpg', 'fot5.jpg', 'fot6.jpg', 'fot7.jpg', 'fot8.jpg'];

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

    }


    render() {

        if (this.state.name.length === 0) {
            return null
        }


        let route_name = this.state.name[this.state.random];
        let distance = this.state.distance[this.state.random];
        let start = this.state.start[this.state.random];
        let level = this.state.level[this.state.random];
        let color = 'black';

        let white_space = route_name.indexOf(" ");


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
                    backgroundImage: `url(/src/images/${this.state.id})`
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


        fetch(`http://localhost:3000/routes/`)
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

                    tab.push(data[i].name)
                    tab2.push(data[i].distance)
                    tab3.push(data[i].location)
                    tab4.push(data[i].level)
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

