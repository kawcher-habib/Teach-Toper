import React from 'react';
import './service.css'
import business from '../../image/service/briefcase.png';
import developer from '../../image/service/development.png';
import account from '../../image/service/accounting.png';
import itSoft from '../../image/service/callcenter.png';
import marketing from '../../image/service/bullhorn.png';
import design from '../../image/service/web-design.png';
import photo from '../../image/service/photo.png';
import fitness from '../../image/service/lotus.png';
import lifeStyle from '../../image/service/traveller.png';

const Service = () => {
    return (
        <div className="mt-3 mb-5 p-4">
            <div className="container">
                <span className="text-center d-block text-secondary">Popular Category</span>
                <h3 className="text-center"> <span className="text-danger">Hot & Popular</span> Category For Learn</h3>
                <div className="row">
                    <div className="col-md-4 col-ms-12 mt-4">
                        <div className="business p-4 d-flex rounded ">
                            <img src={business} className="img-flute" alt="business-img" />
                            <div className="ms-4">
                                <h5 className="text-warning">Business</h5>
                                <h6 className="text-secondary">45 Class</h6>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 col-ms-12 mt-4">
                        <div className="developer p-4 d-flex rounded ">
                            <img src={developer} className="img-flute" alt="developer-img" />
                            <div className="ms-4">
                                <h5 className="text-info">Development</h5>
                                <h6 className="text-secondary">120 Class</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-ms-12 mt-4">
                        <div className="account p-4 d-flex rounded ">
                            <img src={account} className="img-flute" alt="account-img" />
                            <div className="ms-4">
                                <h5 className="text-success">Accounting</h5>
                                <h6 className="text-secondary">70 Class</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-ms-12 mt-4 ">
                        <div className="itSoft p-4 d-flex rounded ">
                            <img src={itSoft} className="img-flute" alt="itSoft-img" />
                            <div className="ms-4">
                                <h5 className="text-success">It & Software</h5>
                                <h6 className="text-secondary">150 Class</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-ms-12  mt-4">
                        <div className="marketing p-4 d-flex rounded ">
                            <img src={marketing} className="img-flute" alt="marketing-img" />
                            <div className="ms-4">
                                <h5 className="text-primary">Marketing</h5>
                                <h6 className="text-secondary">86 Class</h6>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 col-ms-12 mt-4">
                        <div className="design p-4 d-flex rounded ">
                            <img src={design} className="img-flute" alt="design-img" />
                            <div className="ms-4">
                                <h5 className="text-warning">Art & Designing</h5>
                                <h6 className="text-secondary">286 Class</h6>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4 col-ms-12 mt-4">
                        <div className="photo p-4 d-flex rounded ">
                            <img src={photo} className="img-flute" alt="photo-img" />
                            <div className="ms-4">
                                <h5 className="text-info">Photography</h5>
                                <h6 className="text-secondary">50 Class</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-ms-12 mt-4">
                    <div className="fitness p-4 d-flex rounded ">
                    <img src={fitness} className="img-flute" alt="fitness-img" />
                            <div className="ms-4">
                                <h5 className="text-warning">Health & Fitness</h5>
                                <h6 className="text-secondary">170 Class</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-ms-12 mt-4">
                    <div className="lifeStyle p-4 d-flex rounded ">
                    <img src={lifeStyle} className="img-flute" alt="lifeStyle-img" />
                            <div className="ms-4">
                                <h5 className="text-danger">LifeStyle</h5>
                                <h6 className="text-secondary">110 Class</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Service;