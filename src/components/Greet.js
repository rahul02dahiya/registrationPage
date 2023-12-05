import React from 'react';
import '../stylesheets/greet.css';
import { Link } from 'react-router-dom';
const greet = () => {
    return (
        <div className="greet">
            
            <div className="greeting">
            Wel0ome to my Web
            </div>
            <h2 style={{"color":"#c7c7c7"}}>
                Your dreams will come true!
            </h2>
            <div className="routeButtons">
                <Link to='/login'><button className='btn m-5'>LogIn</button></Link>
                <Link to='/signup'><button className='btn m-5'>SignUp</button></Link>
            </div>
            <div className="smile"></div>
            
        </div>
    );
}

export default greet;