import React from 'react';
import img from '../../image/e-know.jpg'
import './about.css';



const About = () => {
    return (
        <div id="about" className='aboutArea'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-sm-12">
                        <h2 className="text-secondary mb-3">Know About <span style={{color:'#fa5c7e'}}>E-Learn</span> Learning Platform</h2>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis numquam esse delectus dolorem quibusdam animi error accusantium dolor quisquam illum porro veritatis fugiat quod sed temporibus eveniet necessitatibus reprehenderit consectetur minus, tenetur laborum beatae! Ea modi at aspernatur minus illum, facere praesentium dolorum quos illo cum temporibus deleniti dolorem, cupiditate fugiat ducimus, vel numquam iusto obcaecati architecto? Repellat laborum dolorem animi similique deleniti saepe? Est quisquam aliquid esse mollitia illo minus, odio quam officiis amet veritatis neque enim quos, suscipit quasi sequi, omnis dolore! Temporibus voluptates unde minima illo, doloribus nisi reiciendis a quam ex, dicta molestiae. Reiciendis omnis deserunt, dolor praesentium unde id quod. Facilis perferendis vitae maiores laudantium eius minus itaque laboriosam totam eveniet in nam quo aliquam quaerat nulla asperiores autem temporibus mollitia nostrum quos, quisquam labore! Eligendi laudantium consequatur asperiores itaque, quas reiciendis, veritatis deleniti consectetur quos tempore cumque corrupti eaque eveniet impedit nemo rem quo.</p>
                        <div className="row text-danger">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <h1>5M</h1>
                                <h6 className="text-secondary">Active Cources</h6>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                            <h1>50k</h1>
                                <h6 className="text-secondary">Student Learning</h6>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                            <h1>76+</h1>
                                <h6 className="text-secondary">Free Courses</h6>
                            </div>
                        </div>
                        <button className="btn btn-outline-danger mt-2 p-2">Know More</button>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12"> 
                            <img src={img} alt="e-know-img" className="w-100 img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;