import React from 'react';
import './main.css';
import img1 from '../../image/—Pngtree—hand drawn online learning cartoon_5341175.png';
import img2 from '../../image/—Pngtree—online network online education class_6184729.png';

const Main = () => {
    return (
        <div className="mt-0 main__area" style={{background:'#032656'}}>
            <div className=" container mb-0 ">
                <div className="row">
                    <div className=" col-lg-4 col-md-4 col-sm-12 d-flex align-items-center justify-content-center">
                        <div className=" text-secondary mt-3">
                            <h1 className="text-warning fw-bold"><span className="text-white">Welcome To</span> <span className="text-info ">Teach</span>Toper</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, tempora.</p>
                        </div>
                       
                    </div>
                    <div className=" col-lg-8 col-md-8 col-sm-12 ">
                       <div className="d-flex justify-content-end">
                       <img src={img2} alt="bgt-img" className="w-75 img-fluid "/>
                       </div>
                    </div>
                </div>
        </div>
        </div>
        
     );
};

                    export default Main;