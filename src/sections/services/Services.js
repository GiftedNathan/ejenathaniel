import { SectionHeader } from '../../components/section-header/SectionHeader'
import './services.css'
// import {FaCode} from 'react-icons/fa'

const Services = ({ title, subtitle, note }) => {
    return (
        <div id="services" className="services-section bg-gradient-open">
            <SectionHeader title={title} subtitle={subtitle} note={note} />
            <div className="services-container">
                <div className="service">
                    {/* <FaCode className="service-icon"/> */}
                    <i className="fa fa-code service-icon" aria-hidden="true"></i>
                    <h3 className="service-name">code</h3>
                    <p className="service-text">
                        Your computer program written from
                        scratch, beginning to end in no distant time
                    </p>
                </div>
                <div className="service">
                    <i className="fas fa-chalkboard-teacher service-icon" aria-hidden="true"></i>
                    <h3 className="service-name">tutorials</h3>
                    <p className="service-text">
                        You can acquire the necessary skills at no cost,
                        imparting them is indeed a hubby
                    </p>
                </div>
                <div className="service">
                    <i className="fas fa-building service-icon" aria-hidden="true"></i>
                    <h3 className="service-name">design</h3>
                    <p className="service-text">
                        A plan for the structure and functions of your system,
                        giving it shape and appearance
                    </p>
                </div>
                <div className="service">
                    <i className="fas fa-hands-helping service-icon" aria-hidden="true"></i>
                    <h3 className="service-name">support</h3>
                    <p className="service-text">
                        Your Application or System don't have to fall or fail. Analytics, Reports and
                        Recommendations to further improve performance
                    </p>
                </div>
                <div className="service">
                    <i className="fas fa-file-archive service-icon" aria-hidden="true"></i>
                    <h3 className="service-name">analysis</h3>
                    <p className="service-text">
                        Decomposition of your problem into components,
                        study its complexity, concept and the theory behind it.
                    </p>
                </div>
                <div className="service">
                    <i className="fas fa-dollar-sign service-icon" aria-hidden="true"></i>
                    <h3 className="service-name">market</h3>
                    <p className="service-text">
                        The smallest of your ideas and solutions can really
                        be millions if only it gets into the right place.
                        let it be sold for you
                    </p>
                </div>
            </div>
        </div>
    )
}

Services.defaultProps = {
    title: 'sevices',
    subtitle: ' What Can I Do For You?',
    note: 'A cross section of the list of all the services i can provide.',
}

export default Services
