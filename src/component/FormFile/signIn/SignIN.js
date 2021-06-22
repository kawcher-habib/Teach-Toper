import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../../firebaeConfig/firebaseConfig';

const SignIN = () => {
   if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
      };
      

      

    return (
        <div>
            
        </div>
    );
};

export default SignIN;