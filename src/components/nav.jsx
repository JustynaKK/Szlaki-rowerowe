import React from 'react';
import { NavLink } from 'react-router-dom';
import kaczka from '../../images/Kaczka_01.png';

class Nav extends React.Component {

    toggleSideNav = () => {
        const nav = document.querySelector('nav');
        console.log(nav.classList.toggle('active'))
    };

    render() {
        return (
            <nav onClick={this.toggleSideNav}>
                <div className="wrapper">
                    <NavLink exact to='/'>
                        <div className={'logo'}>
                            <img src={kaczka} alt=""/>
                            <h1><strong>S</strong>zlaki <strong>r</strong>owerowe</h1>
                        </div>
                    </NavLink>

                    <div className="hamburger">
                        <i></i>
                    </div>
                    <ul className="navList">
                        <li>
                            <NavLink exact to='/'>
                                Strona główna
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={{ pathname: '/search', state: { voivodeship: 'calaPolska'} }}>
                                Szukaj trasy
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>
                                O stronie
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>
                                Kontakt
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </nav>
        )
    }
}



export default Nav;
