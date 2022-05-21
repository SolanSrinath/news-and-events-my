import React, { useState } from "react";
import {CONFIG, LOGIN_URL } from '../../utils/constants'
import "./style.css";
import axios from 'axios';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [inputs, setInputs] = useState({ username: "", password: "" });

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        event.persist();
        setInputs((inputs) => ({
            ...inputs,
            [event.target.name]: event.target.value,
        }));
    };

    const handleRegister = () => {
        alert("clicked");
    };

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
            const body = JSON.stringify({
                username: inputs.username,
                password: inputs.password
            });

            try {
                axios.post(LOGIN_URL, body, CONFIG )
                    .then((res) => {
                        console.log('client side')
                        console.log(res.data);
                        if (res.data.status === 'success') {
                            console.log('authenticate');
                            // return (<Dashboard/>
                            navigate('/form');

                        }
                        else {
                            console.log('failed');
                        }

                    })

            } catch (err) {
                console.log("error client side " + err);
            }



        }
    };
    return (
        <>
            <Header />
            <div className="container-fluid log">
                <div className="row">
                    <div className="col">
                        <div className="card text-dark bg-info mb-3">
                            <div className="card-body">
                                <center>
                                    <span className="sp">Login in</span>
                                </center>
                                <form method="POST" onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            aria-describedby="emailHelp"
                                            onChange={handleInputChange}
                                            name="username"
                                            value={inputs.username}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            onChange={handleInputChange}
                                            name="password"
                                            value={inputs.password}
                                        />
                                    </div>
                                    <center>
                                        <button type="submit" className="btn btn-primary">
                                            Submit
                                        </button>
                                    </center>
                                    <div style={{ marginLeft: 20 }}>
                                        Not reistered?
                                        <p className="but" onClick={handleRegister}>
                                            click here!
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
