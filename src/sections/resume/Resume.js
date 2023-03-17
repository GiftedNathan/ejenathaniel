import { SectionHeader } from '../../components/section-header/SectionHeader'
import './resume.css'
import { FaBrain, FaGraduationCap } from 'react-icons/fa'

const Resume = ({ title, subtitle, note }) => {
    return (
        <section id="resume" className="resume-section bg-gradient-close">
            <SectionHeader title={title} subtitle={subtitle} note={note} />

            <h3 className="container-title">work experience <FaBrain className="icon" /></h3>
            <div className="resume-container">
                <div className="line-divider"></div>

                <div className="resume-item">
                    <div className="item-header">
                        <h3 className="item-title">Junior Developer & Designer</h3>
                        <p className="item-date">December 2022 - March 2023 </p>
                    </div>
                    <div className="item-content">
                        <h3 className="item-title">Dawih Solutions (Remote)</h3>
                        <p className="item-text">
                            I Provide professional web designs and solutions as well as
                            provided support and maintance for wordpress solutions.
                        </p>
                    </div>
                </div>
                <div className="resume-item">
                    <div className="item-header">
                        <h3 className="item-title">Web Developer (Intern)</h3>
                        <p className="item-date">August 2019 - March 2020 </p>
                    </div>
                    <div className="item-content">
                        <h3 className="item-title">Xtech Global Services</h3>
                        <p className="item-text">
                            I collaborated closely with coders to create new code. Aided in troubleshooting
                            to identify program problems.
                            To keep the section operating smoothly, I handled clerical tasks for web
                            development employees. I brainstormed novel concepts with project managers
                            and the production team.
                        </p>
                    </div>
                </div>
                <div className="resume-item">
                    <div className="item-header">
                        <h3 className="item-title">Software Developer (Intern)</h3>
                        <p className="item-date">April 2017 - August 2018</p>
                    </div>
                    <div className="item-content">
                        <h3 className="item-title">Zeo Info Tech, Makurdi</h3>
                        <p className="item-text">
                            Developed basic applications using, WordPress,  HTML, CSS, PHP, JavaScript, Bootstrap, React, Laravel and codeIgniter.  Helped development, QA, and user experience teams create new products.
                            Improved software engineering processes and best practices were learned.
                            Collaborated with engineers to find and eliminate software bugs.
                            New applications were tested for usefulness and adherence to the code plan.
                        </p>
                    </div>
                </div>

            </div>

            <h3 className="container-title">education history<FaGraduationCap className="icon" /></h3>
            <div className="resume-container">
                {/* the education section  */}
                <div className="line-divider"></div>

                <div className="resume-item">
                    <div className="item-header">
                        <h3 className="item-title">Bachelor Degree</h3>
                        <p className="item-date">July 2015 - July 2019 </p>
                    </div>
                    <div className="item-content">
                        <h3 className="item-title">University of Agriculture, Makurdi</h3>
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
