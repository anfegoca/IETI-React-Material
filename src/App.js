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
        this.login = this.login.bind(this);
        localStorage.setItem('user', '{ "email":"user@gmail.com", "password":"password", "isLogged":false}');

        
    }
    login(){
        console.log("login");
        this.setState({ isLoggedIn : true });
        localStorage.setItem('user', '{ "email":"user@gmail.com", "password":"password", "isLogged":true}');
        

    }



    render() {
        
        console.log(localStorage.getItem('user'));
        console.log(this.state.isLoggedIn);
        const LoginView = () => (
            <Login login={this.login} />
        );

        const TodoAppView = () => ( 
            <TodoApp />
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
                        <Route exact path="/" component={this.state.isLoggedIn ? TodoAppView : LoginView}/>
                        <Route path="/todo" component={this.state.isLoggedIn ? TodoAppView : LoginView}/>
                    </div>
                </div>
            </Router>
        );
    }



}

export default App;
