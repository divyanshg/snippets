import React, { Component } from 'react';
import smart from './assets/img/smart.png';

class TrustUs extends Component {
    render() {
        return (
            <section className="mb-5 trustUs">
            <div className="container" style={{marginTop:"100px"}}>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" >
                        <img src={smart} alt="smart" className="w-100" />
                    </div>
                    
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 xs-text-center sm-text-center trustBody" style={{paddingTop:"60px"}}>
                        <h3 style={{lineHeight:"30px"}}><u>Trust</u> Us</h3>
                        <h1 className="font-weight-bold" style={{fontSize:"53px"}}>Control with Reliablity</h1>
                        <p style={{width:"75%", fontSize:"22px"}}>
                            Control your home with home assistants like Google Home, Alexa and Siri, so no matter where you are or what you are doing, you are in control.
                        </p>
                    </div>

                </div>
            </div>
            </section>
        )
    }
}export default TrustUs;