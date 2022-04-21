import React from 'react';
import { NavLink } from 'react-router-dom';
import signUpImg from '../../image/signIn.jpg'

function SignUp() {
    return (
        <div className='container m-5 '>

            <div className="row shadow justify-content-center align-items-center ">
                <h4 className='text-center m-5'>Sing Up Form</h4>
                <div className="col-md-2"></div>

                <div className="col-md-5">
                    <form>
                        <div className="mb-3">
                            <label for="FullName" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="FullName" />

                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" />

                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPhone" className="form-label">Phone</label>
                            <input type="phone" className="form-control" id="exampleInputPhone" />

                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Already have an account? <NavLink to='/signIn'>Login</NavLink></label>
                        </div>
                        <button type="submit" className="btn btn-primary mb-2">Submit</button>
                    </form>
                    <p>Registering to this website, you accept our Terms of use and our Privacy policy</p>
                </div>
                <div className="col-md-4">
                    <img src={signUpImg} alt="signIN-img" className=' w-100' />
                </div>
                <div className="col-md-1"></div>
            </div>

        </div>
    );
}

export default SignUp;