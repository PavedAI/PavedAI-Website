import React from 'react';
import '../App.css';
import './Products.css';

function Products(){
    return(
        <div>
        <div className='first-container-products'>
            <h1>Introducing P1.</h1>
            <p>Taking our first steps toward a more robust future.</p>
        </div>

        <div className='steps'>
            <div className='steps-subcontainer-1'>
                <div className='steps-content'>
                    <h1>1. Drive forward and detect any cracks</h1>
                    <p>P1 currently uses the Raspberry Pi as its central technology hub. Powering our motors, copmuter vision system, and 
                        individual subsystems, it provides a reliable platform for controls and coordination. Although the Raspberry Pi caters to our current needs,
                        we hope to design our own custom PCBs to streamline our future products. As for crack detection, we interface our technology with a Google Coral Camera Module,
                        which performs real-time analysis using custom-built CNN models.
                    </p>

                    <p>Once a fissure is detected, we are able to derive its exact coordinates by using color masking and image processing.
                        This information helps P1's subsystems trace over the crack.
                    </p>
                </div>
                <img
                    src={require("../assets/raspi.jpg")}
                    alt="Logo"
                    style={{ width: "80%", height: 'auto'}} // Adjust the width as needed
                />
            </div>

            <h2>If a crack is detected, we...</h2>

            <div className='steps-subcontainer-remaining'>
                <div className='steps-content'>
                    <h1>2. Go over the crack with an ultrasonic sensor</h1>
                    <p>We use an ultrasonic sensor to gauge the crack's depth and volume.</p>
                </div>
            <img
                src={require("../assets/ultrasonic.jpg")}
                alt="Logo"
                style={{ width: "80%", height: 'auto'}} // Adjust the width as needed
            />
            </div>

            <div className='steps-subcontainer-remaining'>
                <div className='steps-content'>
                    <h1>3. Clean the crack with compressed air</h1>
                    <p>Before we proceed, we must remove any dirt or other debris to ensure that our polymer will bind and solidify as intended.</p>
                </div>
                {/* add renders for each component once we have them ready*/}
            </div>

            <div className='steps-subcontainer-remaining'>
                <div className='steps-content'>
                    <h1>4. Mist the crack</h1>
                    <p></p>
                </div>
            </div>

            <div className='steps-subcontainer-remaining'>
                <div className='steps-content'>
                    <h1>4. Extrude eco-friendly fillig into the crack</h1>
                    <p></p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Products;