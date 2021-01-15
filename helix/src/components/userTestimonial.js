import React, { Component } from 'react';
import comma from './assets/img/comma@2x.png';
import userHeadshot from './assets/img/Eleanor-Galtie-black-and-white-circle-headshot.png';

class UserTestimonial extends Component {
    render() {
        return (
            <section className="carousel w-100" aria-label="Gallery">
                <div className="">
                    <div className="reviews-cont mb-5" style={{display: 'flex !important','overflowX':'scroll','overflowY':'hidden'}}>
                        <div className="btn-prev text-center"><i className="fa fa-chevron-left"></i></div>
                        <div className="col-lg-5 col-md-12 col-xs-12 p-4 user-reviews" style={{height:"540px"}}>
                            <div className="w-100" style={{height:"100%"}}>
                                <img src={comma} className="comma-bg" alt="" />
                                <div className="content text-light text-md">
                                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, quod reprehenderit.
                                        Fugit, qui dolor? Modi, sunt hic. Quia at nam ratione accusamus doloremque culpa quidem
                                        molestiae, explicabo tenetur? Molestias, repellat?</h4>
                                </div>
                                <div className="user-sec d-flex">
                                    <img src={userHeadshot} alt="" />
                                    <div className="user-name text-light">
                                        <h5>Elizabeth Jones</h5>
                                        <h6 className="font-weight-bold">Carbonix</h6>
                                    </div>
                                </div>
                                <img src={comma} className="comma-bg-btm" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-xs-12 p-4 user-reviews" style={{height:"540px"}}>
                            <div className="w-100" style={{height:"100%"}}>
                                <img src={comma} className="comma-bg" alt="" />
                                <div className="content text-light text-md">
                                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, quod reprehenderit.
                                        Fugit, qui dolor? Modi, sunt hic. Quia at nam ratione accusamus doloremque culpa quidem
                                        molestiae, explicabo tenetur? Molestias, repellat?</h4>
                                </div>
                                <div className="user-sec d-flex">
                                    <img src={userHeadshot} alt="" />
                                    <div className="user-name text-light">
                                        <h5>Elizabeth Jones</h5>
                                        <h6 className="font-weight-bold">Carbonix</h6>
                                    </div>
                                </div>
                                <img src={comma} className="comma-bg-btm" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-xs-12 p-4 user-reviews" style={{height:"540px"}}>
                            <div className="w-100" style={{height:"100%"}}>
                                <img src={comma} className="comma-bg" alt="" />
                                <div className="content text-light text-md">
                                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, quod reprehenderit.
                                        Fugit, qui dolor? Modi, sunt hic. Quia at nam ratione accusamus doloremque culpa quidem
                                        molestiae, explicabo tenetur? Molestias, repellat?</h4>
                                </div>
                                <div className="user-sec d-flex">
                                    <img src={userHeadshot} alt="" />
                                    <div className="user-name text-light">
                                        <h5>Elizabeth Jones</h5>
                                        <h6 className="font-weight-bold">Carbonix</h6>
                                    </div>
                                </div>
                                <img src={comma} className="comma-bg-btm" alt="" />
                            </div>
                        </div>
                        <div className="btn-next text-center"><i className="fa fa-chevron-right"></i></div>
                    </div>
                </div>
            </section>
        );
    }
} export default UserTestimonial;