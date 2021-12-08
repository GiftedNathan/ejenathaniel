import './hero.css'
import { Links } from '../../components/social_links/Links'
import Button from '../../components/button/Button'
import React from 'react'
import Typed from 'typed.js'
import { FaArrowCircleDown } from 'react-icons/fa'
import Logo from '../../logo-nathan/logo-nath-white.png'



const Hero = ({name, designation, greeting}) => {
    // const learnMoreIcon = <i className="fa fa-arrow-down" aria-hidden="true"></i>
    const learnMoreIcon = < FaArrowCircleDown className="learn-more-icon" />
    
    // Create reference to store the DOM element containing the animation
	  const el = React.useRef(null);

    // Create reference to store the Typed instance itself
    const typed = React.useRef(null);
  
    React.useEffect(() => {
      const options = {
          strings: [
          'Frontend Developer',
          'Graphics Designer',
          'Good with ReactJs',
        ],
        typeSpeed: 80,
        backSpeed: 80,
        loop: true,
        // loopCount: Infinity,
        showCursor: true,
        cursorChar: ']',
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
                <p>{greeting}</p>
                <h1 className="">Work with <span  >{'<'}  {name} {'/>'} </span> </h1>
                <img src={Logo}  className="hero-image" alt="hero-image" />
                <div className="designation">
                  <span className="typed-cursor">[</span> 
                  <h3 ref={el}>{designation}</h3>
                </div>
            </div>

            <Button name={'Learn more'} icon={learnMoreIcon} />

            <Links />
        </section>
    )
}

Hero.defaultProps = {
    name: 'NathanEje',
    designation: 'Frontend Developer',
    greeting: 'hello world'
}



export default Hero
