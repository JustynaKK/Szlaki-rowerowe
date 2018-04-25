import React from 'react';

import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';

import Nav from './nav.jsx';
import Home from './home.jsx';
import Search from './search.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';
import ResultRoute from './resultroute.jsx';


class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Nav/>
                    <Switch >
                        <div className={"lower"}>
                        <Route exact path='/' component={Home}/>
                        <Route path='/search'  component={Search}/>
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/route/:id' component={ResultRoute} />
                        </div>
                        {/*<Route component={NotFound} />*/}
                    </Switch>
                    <footer >
                        <div className={'footer'}>
                            © Kacze trasy
                        </div>
                    </footer>
                </div>
            </HashRouter>
        )
    }
}

export default App;

