import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

// Pages
import Home from './pages/Home'
import About from './pages/About'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
