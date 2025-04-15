import { SectionHeaderCenter } from '../../components/section-header/SectionHeaderCenter'
import './services.css'
// import {FaCode} from 'react-icons/fa'

const Services = ({ title, subtitle, note }) => {
    return (
        <div id="services" className="services-section bg-gradient-open">
            <SectionHeaderCenter title={title} subtitle={subtitle} note={note} />
            <div className="services-container">
                <div className="service">
                    {/* <FaCode className="service-icon"/> */}
                    <i className="fa fa-code service-icon" aria-hidden="true"></i>
                    <h3 className="service-name">Custom Development</h3>
                    <p className="service-text">
                        From concept to launch, I build powerful applications from scratch—quickly, cleanly, and with your goals in mind.
                    </p>
                </div>
                <div className="service">
                    <i className="fas fa-chalkboard-teacher service-icon" aria-hidden="true"></i>
                    <h3 className="service-name">Tutorials & Training</h3>
                    <p className="service-text">
                        Passionate about sharing knowledge, I offer free tutorials to help others gain real-world skills. 
                        Teaching is more than a job—it’s a joy.
                    </p>
                </div>
                <div className="service">
                    <i className="fas fa-building service-icon" aria-hidden="true"></i>
                    <h3 className="service-name">design</h3>
                    <p className="service-text">
                        I craft thoughtful layouts and interfaces that bring clarity, structure, and style to your systems.
                    </p>
                </div>
                <div className="service">
                    <i className="fas fa-hands-helping service-icon" aria-hidden="true"></i>
                    <h3 className="service-name">Maintenance & Support</h3>
                    <p className="service-text">
                        Keep your apps and systems running smoothly. I provide performance insights, detailed reports, and actionable recommendations.
                    </p>
                </div>
                <div className="service">
                    <i className="fas fa-file-archive service-icon" aria-hidden="true"></i>
                    <h3 className="service-name">Problem Analysis</h3>
                    <p className="service-text">
                        I break down complex challenges into manageable components—studying functionality, 
                        structure, and theoretical underpinnings to offer the best solution.
                    </p>
                </div>
                <div className="service">
                    <i className="fas fa-dollar-sign service-icon" aria-hidden="true"></i>
                    <h3 className="service-name">Product Launch & Marketing</h3>
                    <p className="service-text">
                        Even the smallest idea has the potential to grow. I help position and promote your solutions 
                        to the right audience for maximum impact.
                    </p>
                </div>
            </div>
        </div>
    )
}

Services.defaultProps = {
    title: 'sevices',
    subtitle: 'How I Can Help You Succeed',
    note: 'Here is a snapshot of the value I bring—tailored solutions to transform your ideas into impactful digital experiences.',
}

export default Services
