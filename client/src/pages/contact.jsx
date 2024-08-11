import React from "react";
import Navbar from "../components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import './home.css'
import Footer from "../components/footer";

function Contact() {
    return (
        <div>
            <Navbar centerText="Contact Us" backgroundImage="https://themewagon.github.io/montana/img/banner/bradcam3.png" />

            <div className="d-flex justify-content-center">
                <div className="map-container w-100">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115840.56992344346!2d66.9919965556516!3d24.863241295534547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ea3db108f41%3A0x42acc4507358b160!2sAptech%20Learning%2C%20Shahrah%20e%20Faisal%20Center!5e0!3m2!1sen!2s!4v1722942458099!5m2!1sen!2s"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />


                </div>

            </div>

            <div className="container">
                <div className="row ">
                    <div className="col-md-2 my-5 mt-5 mb-5"></div>
                    <div className="col-md-5 mt-5 mb-5">
                        <h2>Get in Touch</h2>
                        <form>
                            <div className="form-group mt-3">
                                <textarea className="form-control mt-2" id="name" rows="3" placeholder="Enter your message"></textarea>
                            </div>
                            <div className="form-row mt-4">
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" id="yourName" placeholder="Enter your name" />
                                </div>
                                <div className="form-group col-md-6 mt-4">
                                
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                </div>
                            </div>
                            <div className="form-group mt-4">
                                <input type="text" className="form-control" id="subject" placeholder="Enter subject" />
                            </div>
                            <button type="submit" className="btn btn-primary mt-4 ">Send</button>
                        </form>
                    </div>
                    <div className="col-md-1 mt-5"></div>
                    <div className="col-md-4 mt-5 ">
                        <div className="contact-info mt-5">
                            <div className="info-item ">
                                <i className="fas fa-map-marker-alt mt-5"></i>
                                <p className="mt-5">Luzury Stay Hotel , Suite 900</p>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-phone-alt"></i>
                                <p>+92 317 0241586</p>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-envelope"></i>
                                <p>info@luxurystay.com Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           <Footer/>
        </div>


    );
}

export default Contact