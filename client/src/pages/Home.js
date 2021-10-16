import React, {useState} from 'react';
import NavigationHeader from '../components/NavigationHeader';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import About from './About';
import CreateReview from './CreateReview';
import Login from '../components/Login';
import Logout from '../components/Logout';
import useToken from '../components/useToken';

export default function Home() {
    const { token, setToken } = useToken();


    if(!token){
        return <Login setToken={setToken}/>
     }


    return (
        <div>
            <Router>
                {/* We are passing the currentPage from state and the function to update it */}
                <NavigationHeader  />
                {/* Here we are calling the renderPage method which will return a component  */}
                <Switch>
                    <Route path="/logout" component={Logout}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/" exact component={Dashboard}/>
                    <Route path="/createReview" component={CreateReview}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </Router>
        </div>
    );
}