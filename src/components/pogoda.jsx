import React from 'react';
import ReactDOM from 'react-dom';
import {Description} from './description.jsx';
import {Nearby} from "./nearby.jsx";

class Weather extends React.Component {

    state = {
        city: 'Krosno',
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

   
        // wyciagam nazwe miasta
        const city_name = this.state.city_name.name;

        //dzień tygodnia
       const week = [ 'Niedziela', 'Poniedziałek','Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota']


       let current_weather;
       for (let i in this.state.weather[0]) {
           current_weather = this.state.weather[0].main.temp
       }
        // console.log(current_weather)

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



       const style = {
           width: '35%',
           height: '60vh',
           border: '1px solid lightgrey',
           boxSizing: 'border-box',
           color: 'gray',
           fontFamily: 'Arial',
           background: 'rgba(226,226,226,0.5)'
       }

       const city = {
           textAlign: 'center',
           fontSize: '2.5em',
           marginBottom: '0',
           backgroundColor: '#99CC99'
       }

        const up_div = {
           display: 'flex',
            justifyContent: 'space-around'
        }
       const small_data = {
           listStyle: 'none',
           // paddingTop: '30px',
       }
       const next_days = {
           listStyle: 'none',
           display: 'flex',
           justifyContent: 'space-around',
           paddingLeft: '0',
       }
       const temp = {
           fontSize: '40px',
       }

       const iconka =  {
           display: 'flex',
           justifyContent: 'space-around',
           width: '160px'
       }

       return (

           <section style={style}>
               <h1 style={city}>{city_name}</h1>
               <div style={up_div}>
                   <div >
                       <p><strong>{week[this.state.current_weekday]}, {this.state.current_time}</strong></p>
                       <p>{this.state.current_day}</p>
                       <p style={iconka}><img src={`http://openweathermap.org/img/w/${icon}.png`}/> <span style={temp}>{Math.floor(current_weather-273.15)} &#186; C</span></p>
                   </div>
                   <ul style={small_data}>
                       <li><strong>Wilgotność:</strong> {humidity}%</li>
                       <li><strong>Ciśnienie:</strong> {Math.floor(pressure)}hPa</li>
                       <li><strong>Zachmurzenie:</strong> {cloudiness}%</li>
                       <li><strong>Wiatr:</strong> {wind}m/sek</li>
                   </ul>
               </div>
               <div>
                   <hr/>
                <ul style={next_days}>
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
       fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&APPID=db0a1381d8d7c95e1c021ec63e7a0fb5`)
           .then(resp => {
               if(resp.ok) {
                   return resp.json()
               } else {
                   throw new Error('Błąd sieci!');
               }
           })
           .then(data => {
               console.log(data.list)
   
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

       fetch(`http://localhost:3000/routes/${this.props.match.params.id}`)
       .then(resp => {
           if(resp.ok) {
               return resp.json()
           } else {
               throw new Error("Błąd sieci")
           }
       })
       .then(data => {
           console.log(data)
           this.setState({
               name: data.name
           })

       }).catch(err => {
       console.log(err, "Error")
   })

   }
}


class Result extends React.Component {

    state = {
        src:`https://www.traseo.pl/mapa/${this.props.id}/m/0/i/0/g/0/`,
    }

    render () {
        return (
            <div>
                <iframe src={this.state.src} style={{width:"40vw", height:"60vh",frameborder:'0', border:'border:1px solid #000' }}>
                </iframe><div style={{padding:'5px 0', width: '600px'}}>
                <a style={{fontSize: '11px', color:'#888', opacity:'0.7'}} href="https://www.traseo.pl/trasa/petla-spiska">Zobacz trasę w Traseo</a></div>
            </div>
        )
    }
}


class App extends React.Component {

    state = {
        show: 'none',
    }

    handleClick = () => {
        this.setState({
            show: 'block',
        })
    }

    render () {

        const style = {
            // height: '90vh',
            width: '80vw',
            border: '1px solid red',
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '10vh',
            paddingTop: '20px',
        }

        const container = {
            boxSizing: 'border-box',
            width: '90vw',
            height: '100%',
            border: '1px solid green',
             paddingLeft: '5vw',
            paddingRight: '5vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',

        }

        const robocze = {
            border: '1px solid blue',

        }

        const kaczka = {
            height: '55px',
            width: '70px',
            position: 'absolute',
            top: '20px',
            right: '200px'
        }

        return (
            <section style={container}>
                      <img style={kaczka} src="../images/Kaczka_01.png"/>
                <div style={style}>
                    <Result id={92828}/>
                  
                    <Weather/>

                </div>
                <br/>
                <div style={robocze}> Opis trasy:
                    <hr/>
                   Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis.

                    Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a,
                    ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim.
                    Phasellus fermentum in, dolor. Pellentesque facilisis. Nul 
                </div>
                <br/>
                <Description location='Pędzichów' distance={65.7} typeBike='MTB' level='średni'/>
                <div onClick={this.handleClick}>WIĘCEJ:
                    <div style={{display: this.state.show}}>
                <Nearby text='Zobacz podobne trasy w okolicy:'/>
                 <Nearby  text='Zobacz noclegi w okolicy:'/>
                <Nearby text='Zobacz atrakcje w okolicy:'/>
                </div> 
                 </div>
            </section>


        )
    }
}

document.addEventListener('DOMContentLoaded', function(){
    console.log("kjaskdsa");

    ReactDOM.render( <App/>,
        document.getElementById('app')
    );
});