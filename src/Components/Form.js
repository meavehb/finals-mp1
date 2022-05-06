import React, { useState } from 'react';
//import { Link } from 'react-router-dom';

export default function Form() {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmpass: ""
    });

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleNameChange = (e) => {
        setValues({...values, name: e.target.value});
    };
    
    const handleEmailChange = (e) => {
        setValues({...values, email: e.target.value});
    };

    const handlePasswordChange = (e) => {
        setValues({...values, password: e.target.value});
    };

    const handleConfirmPassChange = (e) => {
        setValues({...values, confirmpass: e.target.value});
    };

    const handleSubmitChange = (e) => {
        e.preventDefault();
        if (values.name && values.email && values.password && values.confirmpass){
            setValid(true);
        }
        setSubmitted(true);
    }

    return (
        <div className="form">
            <form class="register-form" onSubmit={handleSubmitChange}>
                <h1>Create an account</h1>

                {submitted && valid ? (
                    <div className="success">Kindly check your email to activate and customize your account.
                    </div>) : null}

                <input
                    id="name"
                    class="form-field"
                    type="text"
                    placeholder="Your name"
                    name="name"
                    value={values.name}
                    onChange={handleNameChange}
                />
                {submitted && !values.name ? (
                    <span id="error">Please enter a name.</span>
                ) : null}

                <input
                    id="email"
                    class="form-field"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleEmailChange}
                />
                {submitted && !values.email ? (
                    <span id="error">Please enter a valid email address.</span>
                ) : null}

                <input
                    id="password"
                    class="form-field"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={handlePasswordChange}
                />
                {submitted && !values.password ? (
                    <span id="error">Please enter a password.</span>
                ) : null}

                <input
                    id="confirmpass"
                    class="form-field"
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmpass"
                    value={values.confirmpass}
                    onChange={handleConfirmPassChange}
                />
                {submitted && !values.confirmpass ? (
                    <span id="error">Please confirm your password.</span>
                ) : null}

                <button class="form-field" type="submit">Register</button>

                <p>Already have an account? <a href="/SignIn.js">Log in here.</a></p>
            </form>
        </div>
    );

}