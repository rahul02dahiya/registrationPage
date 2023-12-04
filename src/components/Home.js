import React from 'react';
import '../stylesheets/home.css';
const Home = () => {
    return (
        <div className="home">
            
            <div className="greeting">
            Wel0ome to my Web
            </div>
            <h2 style={{"color":"#c7c7c7"}}>
                Your dreams will come true!
            </h2>
            <div className="routeButtons">
                <button className='btn m-5'>LogIn</button>
                <button className='btn m-5'>SignUp</button>
            </div>
            <div className="smile"></div>
            
        </div>
    );
}

export default Home;