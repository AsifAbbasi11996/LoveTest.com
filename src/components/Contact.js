import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/Contact.css'
import homepagebgvideo from '../assets/images/homepagebgvideo.mp4'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="contact-container">
                <video autoPlay loop muted src={homepagebgvideo}></video>
                <h1>GET IN TOUCH</h1>
                <p>We'd love to hear how our team of expert cloud specialists can support your journey to the cloud.</p>

                <p>Reach out for more information on our services or book a quick coffee to say hello :</p>

                <div className="form">
                    <form action="">
                        <label htmlFor="">Name <span>(Required)</span></label><br /><br />

                        <label htmlFor="">First</label>
                        <input type="text" required /><br /><br />

                        <label htmlFor="">Last</label>
                        <input type="text" required /><br /><br /><br />


                        <label htmlFor="">Email <span>(Required)</span></label><br /><br />

                        <label htmlFor="">Enter Email</label>
                        <input type="email" required /><br /><br />

                        <label htmlFor="">Confirm Email</label>
                        <input type="email" required /><br /><br /><br />

                        <label htmlFor="">Comments <span>(Required)</span></label><br /><br />

                        <p>Please let us know what's on your mind. Have a question for us? Ask away.</p><br /><br />

                        <textarea name="" id=""></textarea><br /><br /><br/>


                        <div className="btn">
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
