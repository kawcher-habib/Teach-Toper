import React from 'react';
import img1 from '../../image/Ellipse 1.png';
import img2 from '../../image/Ellipse 2.png';
import img3 from '../../image/Ellipse 3.png';
import facBook from '../../image/icon/facebook.png';
import linkeDin from '../../image/icon/linkedin.png';
import twitter from '../../image/icon/twitter.png';

const Testimonial = () => {
    return (
        <div>
            <div className="container mt-5 mb-3 pb-5">
                <span className="text-center d-block te">Meet Instructors</span>
                <h3 className="text-center"> <span className="text-danger">Top & Famous</span> Instructor In Your City</h3>

                <div className="row mt-5">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner ">
                                <div class="carousel-item active">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-12  shadow p-4 ">
                                            <div className="ms-3">
                                                <div className="imgArea w-50 mx-auto d-block">
                                                    <img src={img1} alt="slideIMg" className="w-100 img-fluid" />
                                                </div>
                                                <div className="text-center mt-2">
                                                    <h4>Adam Willsoriam</h4>
                                                    <h6>Web Designer, Canada</h6>
                                                </div>
                                                <div className="icon text-center">
                                                    <a href="#"><img src={facBook} alt="facBook" className="img-fluid ms-2" style={{ width: '30px' }} /></a>
                                                   <a href="#"><img src={linkeDin} alt="linkeDin" className="img-fluid ms-2" style={{ width: '30px' }} /></a>
                                                    <a href="#"><img src={twitter} alt="twitter" className="img-fluid ms-2" style={{ width: '30px' }} /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12  shadow p-4 ">
                                            <div className="ms-3">
                                                <div className="imgArea w-50 mx-auto d-block">
                                                    <img src={img2} alt="slideIMg" className="w-100 img-fluid" />
                                                </div>
                                                <div className="text-center mt-2">
                                                    <h4>Singh Willsh</h4>
                                                    <h6>Team Manager, Usa</h6>
                                                </div>
                                                <div className="icon text-center">
                                                <a href="#"><img src={facBook} alt="facBook" className="img-fluid ms-2" style={{ width: '30px' }} /></a>
                                                   <a href="#"><img src={linkeDin} alt="linkeDin" className="img-fluid ms-2" style={{ width: '30px' }} /></a>
                                                    <a href="#"><img src={twitter} alt="twitter" className="img-fluid ms-2" style={{ width: '30px' }} /></a>
                                                </div>
                                            </div>
                                        </div><div className="col-lg-4 col-md-4 col-sm-12   shadow p-4 ">
                                            <div className="ms-3">
                                                <div className="imgArea w-50 mx-auto d-block">
                                                    <img src={img3} alt="slideIMg" className="w-100 img-fluid" />
                                                </div>
                                                <div className="text-center mt-2">
                                                    <h4>Shilpa Singh</h4>
                                                    <h6>Business Executing, BD</h6>
                                                </div>
                                                <div className="icon text-center">
                                                <a href="#"><img src={facBook} alt="facBook" className="img-fluid ms-2" style={{ width: '30px' }} /></a>
                                                   <a href="#"><img src={linkeDin} alt="linkeDin" className="img-fluid ms-2" style={{ width: '30px' }} /></a>
                                                    <a href="#"><img src={twitter} alt="twitter" className="img-fluid ms-2" style={{ width: '30px' }} /></a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="carousel-item ">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-12  shadow p-4 ">
                                            <div className="ms-3">
                                                <div className="imgArea w-50 mx-auto d-block">
                                                    <img src={img2} alt="slideIMg" className="w-100 img-fluid" />
                                                </div>
                                                <div className="text-center mt-2">
                                                    <h4>Adam Willsoriam</h4>
                                                    <h6>Web Designer, Canada</h6>
                                                </div>
                                                <div className="icon text-center">
                                                    <a href="#"><img src={facBook} alt="facBook" className="img-fluid ms-2" style={{ width: '30px' }} /></a>
                                                   <a href="#"><img src={linkeDin} alt="linkeDin" className="img-fluid ms-2" style={{ width: '30px' }} /></a>
                                                    <a href="#"><img src={twitter} alt="twitter" className="img-fluid ms-2" style={{ width: '30px' }} /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12  shadow p-4 ">
                                            <div className="ms-3">
                                                <div className="imgArea w-50 mx-auto d-block">
                                                    <img src={img3} alt="slideIMg" className="w-100 img-fluid" />
                                                </div>
                                                <div className="text-center mt-2">
                                                    <h4>Singh Willsh</h4>
                                                    <h6>Team Manager, Usa</h6>
                                                </div>
                                                <div className="icon text-center">
                                                <a href="#"><img src={facBook} alt="facBook" className="img-fluid ms-2" style={{ width: '30px' }} /></a>
                                                   <a href="#"><img src={linkeDin} alt="linkeDin" className="img-fluid ms-2" style={{ width: '30px' }} /></a>
                                                    <a href="#"><img src={twitter} alt="twitter" className="img-fluid ms-2" style={{ width: '30px' }} /></a>
                                                </div>
                                            </div>
                                        </div><div className="col-lg-4 col-md-4 col-sm-12   shadow p-4 ">
                                            <div className="ms-3">
                                                <div className="imgArea w-50 mx-auto d-block">
                                                    <img src={img1} alt="slideIMg" className="w-100 img-fluid" />
                                                </div>
                                                <div className="text-center mt-2">
                                                    <h4>Shilpa Singh</h4>
                                                    <h6>Business Executing, BD</h6>
                                                </div>
                                                <div className="icon text-center">
                                                <a href="#"><img src={facBook} alt="facBook" className="img-fluid ms-2" style={{ width: '30px' }} /></a>
                                                   <a href="#"><img src={linkeDin} alt="linkeDin" className="img-fluid ms-2" style={{ width: '30px' }} /></a>
                                                    <a href="#"><img src={twitter} alt="twitter" className="img-fluid ms-2" style={{ width: '30px' }} /></a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-12  shadow p-4 ">
                                            <div className="ms-3">
                                                <div className="imgArea w-50 mx-auto d-block">
                                                    <img src={img3} alt="slideIMg" className="w-100 img-fluid" />
                                                </div>
                                                <div className="text-center mt-2">
                                                    <h4>Adam Willsoriam</h4>
                                                    <h6>Web Designer, Canada</h6>
                                                </div>
                                                <div className="icon text-center">
                                                    <a href="#"><img src={facBook} alt="facBook" className="img-fluid ms-2" style={{ width: '30px' }} /></a>
                                                   <a href="#"><img src={linkeDin} alt="linkeDin" className="img-fluid ms-2" style={{ width: '30px' }} /></a>
                                                    <a href="#"><img src={twitter} alt="twitter" className="img-fluid ms-2" style={{ width: '30px' }} /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12  shadow p-4 ">
                                            <div className="ms-3">
                                                <div className="imgArea w-50 mx-auto d-block">
                                                    <img src={img2} alt="slideIMg" className="w-100 img-fluid" />
                                                </div>
                                                <div className="text-center mt-2">
                                                    <h4>Singh Willsh</h4>
                                                    <h6>Team Manager, Usa</h6>
                                                </div>
                                                <div className="icon text-center">
                                                <a href="#"><img src={facBook} alt="facBook" className="img-fluid ms-2" style={{ width: '30px' }} /></a>
                                                   <a href="#"><img src={linkeDin} alt="linkeDin" className="img-fluid ms-2" style={{ width: '30px' }} /></a>
                                                    <a href="#"><img src={twitter} alt="twitter" className="img-fluid ms-2" style={{ width: '30px' }} /></a>
                                                </div>
                                            </div>
                                        </div><div className="col-lg-4 col-md-4 col-sm-12   shadow p-4 ">
                                            <div className="ms-3">
                                                <div className="imgArea w-50 mx-auto d-block">
                                                    <img src={img1} alt="slideIMg" className="w-100 img-fluid" />
                                                </div>
                                                <div className="text-center mt-2">
                                                    <h4>Shilpa Singh</h4>
                                                    <h6>Business Executing, BD</h6>
                                                </div>
                                                <div className="icon text-center">
                                                <a href="#"><img src={facBook} alt="facBook" className="img-fluid ms-2" style={{ width: '30px' }} /></a>
                                                   <a href="#"><img src={linkeDin} alt="linkeDin" className="img-fluid ms-2" style={{ width: '30px' }} /></a>
                                                    <a href="#"><img src={twitter} alt="twitter" className="img-fluid ms-2" style={{ width: '30px' }} /></a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;