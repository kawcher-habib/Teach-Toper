
import Home from './component/Header/Home'

import { Route, Routes } from 'react-router-dom';
import SignIn from './component/FormFile/signIn/SignIN';
import SignUp from './component/FormFile/SignUp';
import Main from './component/Header/Main';
import Courser from './component/service/Courser'
import Navbar from './component/Header/Navbar';
import About from './component/e-know/About';
import Footer from './component/Footer/Footer';
import Subscription from './component/subscrip/Subscrib';

function App() {
  return (
    <Routes>

      <Route exact path='/' element={<Home />}>
      </Route>
      <Route path='/course' element={<Courser />}>
      </Route>
      <Route path='/about' element={<About />}>
      </Route>
      <Route path='/contact' element={<Subscription />}>
      </Route>
      <Route path='/signIn' element={<SignIn />}>
      </Route>
      <Route path='/signUp' element={<SignUp />}>
      </Route>
    </Routes>
  );
}

export default App;
