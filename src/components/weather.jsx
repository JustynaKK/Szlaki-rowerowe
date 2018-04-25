import React from 'react';
import ReactDOM from 'react-dom';


 class Weather extends React.Component {

    state = {
        city: this.props.city,
        city_name: [],
        weather: [],
        current_day: new Date().toLocaleDateString(),
        current_time: new Date().toLocaleTimeString(),
        current_weekday: new Date().getDay(),
    }

    generateNextDay = (n) => {
        const today = new Date();
        const tmrw = new Date(today.getTime()+(24 * 60 * 60 * 1000)*n)
        return tmrw.getDay()
    }

    generateNextDayTemp = (x) => {
        let temp_next_day_min;
        for (let m in this.state.weather[x]) {
            temp_next_day_min = this.state.weather[x].main.temp
        }
        return temp_next_day_min
    }

    generateIconForNextDay = (y) => {
    
        return this.state.weather[y].weather[0].icon
    
    }

    render () {

        if (this.state.weather.length===0) {
            return null
        }

        const city_name = this.state.city_name.name;
        const week = [ 'Niedziela', 'Poniedziałek','Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];

        let current_weather;
        for (let i in this.state.weather[0]) {
            current_weather = this.state.weather[0].main.temp
        }
        let humidity;
        for (let j in this.state.weather[0]) {
            humidity = this.state.weather[0].main.humidity
        }
        let pressure;
        for (let k in this.state.weather[0]) {
            pressure = this.state.weather[0].main.pressure
        }
        let cloudiness;
        for (let l in this.state.weather[0]) {
            cloudiness = this.state.weather[0].clouds.all
        }
        let wind;
        for (let m in this.state.weather[0]) {
            wind = this.state.weather[0].wind.speed
        }
        let description = this.state.weather[0].weather[0].description;
        let icon = this.state.weather[0].weather[0].icon;
 

 


        return (

            <section className="main_weather_div">
                <h1>{city_name}</h1>
                <div className='up_div'>
                    <div >
                        <p><strong>{week[this.state.current_weekday]}, {this.state.current_time}</strong></p>
                        <p>{this.state.current_day}</p>
                        <p className="iconka"><img src={`http://openweathermap.org/img/w/${icon}.png`}/> <span className="temp">{Math.floor(current_weather-273.15)} &#186; C</span></p>
                    </div>
                    <ul className="small_data">
                        <li><strong>Wilgotność:</strong> {humidity}%</li>
                        <li><strong>Ciśnienie:</strong> {Math.floor(pressure)}hPa</li>
                        <li><strong>Zachmurzenie:</strong> {cloudiness}%</li>
                        <li><strong>Wiatr:</strong> {wind}m/sek</li>
                    </ul>
                </div>
                <p>Pogoda na kolejne dni..</p>
                <div className="hover">
                    <hr/>
                 <ul className="next_days">
                    <li >{week[this.generateNextDay(1)].slice(0,3)}.<p>{Math.floor(this.generateNextDayTemp(7)-273.15)} &#186; C</p><img src={`http://openweathermap.org/img/w/${this.generateIconForNextDay(15)}.png`}/></li>
                     <li>{week[this.generateNextDay(2)].slice(0,3)}.<p>{Math.floor(this.generateNextDayTemp(15)-273.15)} &#186; C</p><img src={`http://openweathermap.org/img/w/${this.generateIconForNextDay(15)}.png`}/></li>
                     <li>{week[this.generateNextDay(3)].slice(0,3)}.<p>{Math.floor(this.generateNextDayTemp(23)-273.15)} &#186; C</p><img src={`http://openweathermap.org/img/w/${this.generateIconForNextDay(23)}.png`}/></li>
                     <li>{week[this.generateNextDay(4)].slice(0,3)}.<p>{Math.floor(this.generateNextDayTemp(31)-273.15)} &#186; C</p><img src={`http://openweathermap.org/img/w/${this.generateIconForNextDay(31)}.png`}/></li>
                     <li>{week[this.generateNextDay(5)].slice(0,3)}.<p>{Math.floor(this.generateNextDayTemp(39)-273.15)} &#186; C</p><img src={`http://openweathermap.org/img/w/${this.generateIconForNextDay(39)}.png`}/></li>
                 </ul>
                </div>
            </section>
         
        )

    }

    componentDidMount () {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&APPID=e1581388278693874a8e19ab2f5159bd`)
        .then(resp => {
            if(resp.ok) {
                return resp.json()
            } else {
                throw new Error('Błąd sieci!');
            }
        })
        .then(data => {
            console.log(data)

            this.setState({
                city_name: data.city,
                weather: data.list,
            })

        })
        .catch(err => console.log(err, 'Error!'))


    this.id = setInterval(()=> {
        this.setState({
            current_time: new Date().toLocaleTimeString()
        })
    }, 1000)

    }

}

export default Weather;