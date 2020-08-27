import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

import 'react-datepicker/dist/react-datepicker.css';
import {Login} from "./components/Login";
import TodoApp from "./components/TodoApp";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {isLoggedIn: false};

        
    }



    render() {
        localStorage.setItem('user', "[{user: 'user' ,password: 'password' , islogged: false}]");
        console.log(localStorage.getItem('user'));
        const LoginView = () => (
            <Login />
        );

        const TodoAppView = () => ( this.state.isLoggedIn ?
            <TodoApp /> : <Login/>
        );

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>

                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/todo">Todo</Link></li>
                    </ul>

                    <div>
                        <Route exact path="/" component={LoginView}/>
                        <Route path="/todo" component={TodoAppView}/>
                    </div>
                </div>
            </Router>
        );
    }



}

export default App;
