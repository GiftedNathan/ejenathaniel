import { SectionHeader } from '../../components/section-header/SectionHeader'
import './resume.css'
import { FaBrain, FaGraduationCap } from 'react-icons/fa'

const Resume = ({title, subtitle, note}) => {
    return (
        <section id="resume" className="resume-section bg-gradient-close">
            <SectionHeader title={title} subtitle={subtitle} note={note} />

            <h3 className="container-title">work experience <FaBrain className="icon"/></h3>
            <div className="resume-container">
                <div className="line-divider"></div>
                
                <div className="resume-item">
                    <div className="item-header">
                        <h3 className="item-title">Freelance</h3>
                        <p className="item-date">July 2020 - Present </p>
                    </div>
                    <div className="item-content">
                        <h3 className="item-title">Fiverr.</h3>
                        <p className="item-text">
                            i Provide professional web designs and solutions.
                        </p>
                    </div>
                </div>
                <div className="resume-item">
                    <div className="item-header">
                        <h3 className="item-title">Developer & Designer</h3>
                        <p className="item-date">May 2018 - Present </p>
                    </div>
                    <div className="item-content">
                        <h3 className="item-title">Gifted Nathan</h3>
                        <p className="item-text">
                            I started my own Web development and Graphics design business. 
                            I build web applications and design graphics for individuals and 
                            organization as well. This project has helped developed my 
                            programming and graphics skills, communication skills as well as my 
                            leadership and commercial knowledge.
                        </p>
                    </div>
                </div>
                                    
            </div>

            <h3 className="container-title">education history<FaGraduationCap className="icon"/></h3>
            <div className="resume-container">
                {/* the education section  */}
                <div className="line-divider"></div>
                
                <div className="resume-item">
                    <div className="item-header">
                        <h3 className="item-title">Bachelor Degree</h3>
                        <p className="item-date">July 2015 - July 2019 </p>
                    </div>
                    <div className="item-content">
                        <h3 className="item-title">Joseph Terka University</h3>
                        <p className="item-text">
                            Modules covered included Artificial Intelligence, 
                            Data Structures and Algorithms, Logic and Computation, 
                            Object Oriented Programming, Full Stack Application 
                            Development, Human-Computer Interaction, Intelligent 
                            Robotics, Machine Learning and Intelligent Data 
                            Analysis, Security of Real-World Systems and 
                            Theoretical Foundations for Security.
                        </p>
                    </div>
                </div>
                <div className="resume-item">
                    <div className="item-header">
                        <h3 className="item-title"> High School</h3>
                        <p className="item-date"> June 2004 - July 2010 </p>
                    </div>
                    <div className="item-content">
                        <h3 className="item-title">West Of Mines Jos</h3>
                        <p className="item-text">
                            Obtained my high school education here. i was aquinted with 
                            the rudiments of a science student, with basic 
                            knowledge in mathematics, physics, chemistry, and biology.
                        </p>
                    </div>
                </div>
                <div className="resume-item">
                    <div className="item-header">
                        <h3 className="item-title"> Primary Education</h3>
                        <p className="item-date"> June 1999 - July 2004 </p>
                    </div>
                    <div className="item-content">
                        <h3 className="item-title">Police Children School Jos</h3>
                        <p className="item-text">
                            I obtanined my first school leaving certificate.
                        </p>
                    </div>
                </div>
            </div>
                

        </section>
    )
}

Resume.defaultProps = {
    title: 'resume',
    subtitle: 'More of my Credentials.',
    note: 'A quick look at my education and work experience.',
    
}

export default Resume
