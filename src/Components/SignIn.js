import React, { useState } from 'react';

export default function Login() {

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);
    
    const handleEmailChange = (e) => {
        setValues({...values, email: e.target.value});
    };

    const handlePasswordChange = (e) => {
        setValues({...values, password: e.target.value});
    };

    const handleSubmitChange = (e) => {
        e.preventDefault();
        if (values.email && values.password){
            setValid(true);
        }
        setSubmitted(true);
    }

    return (
        <div className="form">
            <form class="signin-form" onSubmit={handleSubmitChange}>
                <h1>Welcome back</h1>
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
                    <span id="error">Enter your email address.</span>
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
                    <span id="error">Enter your password.</span>
                ) : null}

                <button class="form-field" type="submit">Log in</button>

                <p>New here? <a href="/Form">Register</a></p>
            </form>
        </div>
    );

}