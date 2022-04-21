import React from 'react';
import { NavLink } from 'react-router-dom';
import singInImg from '../../../image/signUp.jpg';

function SignIN() {
  return (
    <div className='container m-5'>
      <h4 className='text-center m-5'>Sign In Form</h4>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-4">
          <img src={singInImg} alt="signIN-img" className=' w-100' />
        </div>
        <div className="col-md-5">
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" />

            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
              <label className="form-label">Don't have an account? <NavLink to='/signUp'>Sign Up</NavLink></label>
            </div>
            <button type="submit" className="btn btn-primary mb-2">Submit</button>
          </form>
          <p>Registering to this website, you accept our Terms of use and our Privacy policy</p>
        </div>
        <div className="col-md-2"></div>
      </div>

    </div>
  );
}

export default SignIN;