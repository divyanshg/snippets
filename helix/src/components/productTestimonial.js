import React, { Component } from 'react';

class ProductTestimonial extends Component {
    render() {
        return (
            <section style={{width:"100%"}} className=" mb-5">
        <div className="container">
            <h4 className="text-center text-capitalize pt-5 font-weight-light">Hear it from the users</h4>
            <hr className="w-25 mx-auto" style={{borderColor: "black",marginTop:"-5px",maxWidth:"60px",borderWidth:"2px"}} />
            <h1 className="text-center text-capitalize" style={{fontSize:"4vw"}}>Product testimonials</h1>
        </div>
        <div className="row mb-5 product-testimonials">
            <div className="col-lg-6 col-md-12 col-sm-12 testimonial-left card text-light" style={{height:"582px"}}>
                <div className="card-body testimonial-card-body">
                    <h3 className="card-title">Air Touch</h3>
                    <h3 className="card-text">Air touch is the unique feature to helix smart switches, which allows you to
                        control them buy bringing your hand in close proximity</h3>
                    <a href="#" className="text-light w-full">
                        <h4>Explore</h4>
                    </a>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 lg-sc">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-3 mx-auto testimonial test-2 card text-light">
                        <div className="card-body testimonial-card-body">
                            <h3 className="card-title">Elevator Lift</h3>
                            <h3 className="card-text">Helix smart switches provide versitility to blend in various
                                enviourment such as elevators</h3>
                            <a href="#" className="text-light w-full">
                                <h4>Explore</h4>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-3 mx-auto testimonial test-3 card text-light">
                        <div className="card-body testimonial-card-body">
                            <h3 className="card-title">WiFi Enabled</h3>
                            <h3 className="card-text">Helix smart switches are internet enabled smart switch which can be
                                control over the internet</h3>
                            <a href="#" className="text-light w-full">
                                <h4>Explore</h4>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 testimonial test-4 card text-light" style={{height: "265px"}}>
                        <div className="card-body testimonial-card-body" style={{paddingTop:"9%"}}>
                            <h3 className="card-title">Air Touch</h3>
                            <h3 className="card-text">Some quick example text to build on the card title and make up the
                                bulk
                                of
                                the card's content.</h3>
                            <a href="#" className="text-light w-full">
                                <h4>Explore</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 sm-sc d-flex">
                <div className="testimonial sm-testimonial test-2 card text-light">
                    <div className="card-body testimonial-card-body">
                        <h5 className="card-title">Elevator Lift</h5>
                        <h5 style={{fontSize:"14px"}} className="card-text">Helix smart switches provide versitility to blend in various enviourment
                            such as elevators</h5>
                        <a href="#" className="text-light w-full">
                            <h4>Explore</h4>
                        </a>
                    </div>
                </div>
                <div className="testimonial sm-testimonial test-3 card text-light">
                    <div className="card-body testimonial-card-body">
                        <h5 className="card-title">WiFi Enabled</h5>
                        <h5 style={{fontSize:"14px"}} className="card-text">Helix smart switches are internet enabled smart switch which can be
                            control over the internet</h5>
                        <a href="#" className="text-light w-full">
                            <h4>Explore</h4>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-12 sm-sc">
                <div className="w-100 testimonial test-4 card text-light" style={{height:"150px"}}>
                    <div className="card-body testimonial-card-body">
                        <h5 className="card-title">Air Touch</h5>
                        <h5 style={{fontSize:"14px"}} className="card-text">Some quick example text to build on the card title and make up the
                            bulk
                            of
                            the card's content.</h5>
                        <a href="#" className="text-light w-full">
                            <h5>Explore</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        );
    }
} export default ProductTestimonial;