import React from 'react';
import './Investment.css';
import { ContactUs } from '../components/Contact';

function Investment(){

    return(
        <div>
        <div className='first-container-investment'>
            <h1>
                Investors, listen up.
            </h1>
        </div>

        <img
            src={require("../assets/InvestmentPanel2.png")}
            alt="Logo"
            style={{ width: "100%", height: 'auto', marginTop: '-80px'}} // Adjust the width as needed
        />

        <div className='info-panels'>
            <div className='info-subcontainer'>
                <h2>Why us?</h2>
                <p>PavedAI offers a novel, one-of-a-kind fix to the deteriorating state of global pavement and infrastructure. Although 
                    there are other companies out there that are able to detect cracks, ours is the only one that can effectively 
                    fill them and simultaneously tie our user experience together with an easy-to-use dashboard. We plan on developing our line of products and to engineer
                    more solutions that can apply to the other problems today's roads and sidewalks face. With these points in mind, 
                    we believe the novel work we are doing is both paramount to the infrastructure of the future and extremely profitable in our current status quo.
                    Come join us as we reinforce our society as a whole. Together, we'll achieve great things.

                </p>
            </div>

            <div className='info-subcontainer'>
                <h2>Get into contact:</h2>
                {/* <div className='contact-form'>
                    <form ref={form} onsubmit={sendEmail}>
                        <input type='text' name="user_name" id='name' placeholder='Your Name' required />
                        <input type='text' id='subject' placeholder='Subject' required />
                        <input type='email' name="user_email" id='email' placeholder='Your Email' required />
                        <textarea id='message' name="message" rows='5' placeholder="Let's change the future together."></textarea>
                        <button type='submit' id='submit'>Send</button>
                    </form>
                    
                </div> */}
                <ContactUs />

            </div>
        </div>
        </div>
    )
}

export default Investment;