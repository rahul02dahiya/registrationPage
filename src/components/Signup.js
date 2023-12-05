import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <>
            <div id="signup" className="_form">

                <form>

                    <h3>Signup Here</h3>
                    <div>
                        <label htmlFor="username" style={{ display: 'inline-block' }}>Username</label>
                    </div>
                    <input type="text" placeholder="Username" name="username" id="username" />
                    <div><label htmlFor="email" style={{ display: "inline-block" }}>Email</label>
                    </div>
                    <input type="email" placeholder="Email" name="email" id="email" />
                    <div><label htmlFor="password" style={{ display: "inline-block" }}>Password</label>
                    </div>
                    <input type="password" required placeholder="Password" id="password" name="password" />
                    <div><label htmlFor="password2" style={{ display: "inline-block" }}>Confrom Password</label>
                    </div>
                    <input type="password" required placeholder="Confrom Password" id="password2" name="password2" />


                    <Link to='/home'><button type="submit">SignUp</button></Link>

                    <Link to="/login">I have already account</Link>

                </form>
            </div>
        </>
    )
}

export default Signup