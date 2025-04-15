import './hero.css'
import { Links } from '../../components/social_links/Links'
import Button from '../../components/button/Button'
import React from 'react'
import Typed from 'typed.js'
import { FaArrowCircleDown } from 'react-icons/fa'
import Logo from '../../assets/logo/logo-nath-white.png'



const Hero = ({ name, designation, greeting }) => {
  // const learnMoreIcon = <i className="fa fa-arrow-down" aria-hidden="true"></i>
  const learnMoreIcon = < FaArrowCircleDown className="learn-more-icon" />

  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        '’m a Frontend Developer',
        '’m a WordPress Expert',
        '’m a Creative Web Designer',
        '’m a React Enthusiast',
        '’m a CSS Whisperer',
        '’m a Clean Code Advocate',
        '’m a Pixel-Perfect Builder',
        '’ve got Innovative Mindset',
      ],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
      // loopCount: Infinity,
      showCursor: true,
      cursorChar: '',
      autoInsertCss: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])


  return (
    <section className="hero-section bg-gradient-close">
      <div className="hero-section-content">
        <p>👋<span className='greeting'>{greeting}</span></p>
        
        {/* <h1>Let’s Build Something Great Together</h1> */}
        <div className="designation">
          <h3>I<span className="typed-cursor"></span></h3>
          <h3 ref={el}></h3>
        </div>
        <h3 style={{marginTop: -25}}>Let’s Build Something Great Together</h3>

        <p className="hero-text">From concept to launch—I bring ideas to life with clean design, modern tech, and a touch of creative magic.</p>

      <Links />

        <a href="#portfolio"><Button name={'my projects'} icon={learnMoreIcon} /></a>

      </div>

    </section>
    // <section className="hero-section bg-gradient-close">
    //   <div className="hero-section-content">
    //     <p>{greeting}</p>
    //     <img src={Logo} className="hero-image" alt="hero" />
    //     {/* <h1 className="">Let’s Build Something Great Together <span  >{'<'}  {name} {'/>'} </span> </h1> */}
        
    //     <h3 >Let’s Build Something Great Together</h3>
    //     <div className="designation">
    //       <h3>I'm a<span className="typed-cursor">`</span></h3>
    //       <h3 ref={el}>{designation}</h3>
    //     </div>
    //     {/* <div className="designation">
    //       <span className="typed-cursor">[</span>
    //       <h3 ref={el}>{designation}</h3>
    //     </div> */}

    //   <a href="#portfolio"><Button name={'my projects'} icon={learnMoreIcon} /></a>

    //   <Links />

    //   </div>

    // </section>
  )
}

Hero.defaultProps = {
  name: 'NathanEje',
  designation: 'Frontend Developer',
  greeting: 'Hello, work with me'
}



export default Hero
