import React from 'react';
import '../App.css';
import './Home.css';
import { Link } from 'react-router-dom';

// reference: https://aurora.tech/

function About(){
    return(
        <div>
            <div>
                <h1>
                    We are on a mission to fix global infrastructure.
                </h1>

                <p>
                    By combining and implementing our core values of collaboration, creativity, and curiosity into the work we do, we are taking the first
                    steps to engineering the infrastructure of the future
                </p>
            </div>

            <div>
                <h1>
                    Meet the team
                </h1>

                <div class="row">
                    <div class="column">
                        <div class="card">
                            <img src={require("../assets/VAopho.png")} alt="Vardhan"></img>
                            <div class="container">
                                <h2>Vardhan Agnihotri</h2>
                                <p class="title">Co-founder &amp; Programming and Marketing Lead</p>
                                <p>Coming soon</p>
                                <p>va648314@gmail.com</p>
                                <p><button class="button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                </div>

    
            </div>
        
        </div>
    )
}

export default About;