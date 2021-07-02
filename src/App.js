
import './App.css';
import Footer from './component/Footer/Footer';
import Main from './component/Header/Main';
import Navbar from './component/Header/Navbar';
import Header from './component/Header/Header'
import Service from './component/service/Service';
import About from './component/e-know/About';
import Testimonial from './component/testimonial/Testimonial';
import Subscrib from './component/subscrip/Subscrib'
import Maping from './component/maping/Maping'
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Header />
      <Service />
      <About />
      <Testimonial />
      <Maping />
      <Subscrib />
      <Footer />
    </>
  );
}

export default App;
