import './App.css';
import 'animate.css';
import './fontawesome/css/all.css';
import { FaWhatsapp } from 'react-icons/fa';

// importing all the sections from the sections folder 
import Header from './sections/header/Header';
import Hero from './sections/hero/Hero';
import About from './sections/about/About';
import Resume from './sections/resume/Resume';
import Projects from './sections/projects/Projects';
import Blog from './sections/blog/Blog';
import Services from './sections/services/Services';
import Ideas from './sections/acheivements/Acheivement';
import Footer from './sections/footer/Footer';
import Contact from './sections/contact/Contact';



const App = () => {
  return (
    <div className="container">
      <Header />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Blog />
      <Services />
      <Ideas />
      <Contact />
      <Footer />
      <a href="https://wa.me/2348103872283" className='whatsapp-icon-container'>
        <FaWhatsapp className='whatsapp-icon' />
      </a>
    </div>
  )
}


export default App;
