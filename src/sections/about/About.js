import Button from '../../components/button/Button'
import { SectionHeader } from '../../components/section-header/SectionHeader'
import Skill from '../../components/skill/Skill'
import './about.css'
import '../../fontawesome/css/all.min.css'
import { FcBusinessman, FcCalendar, FcBriefcase, FcWebcam, FcDownload, FcManager, FcSettings } from 'react-icons/fc'
import { MdMail } from 'react-icons/md'
import { FaHandshake, FaScrewdriver } from 'react-icons/fa'


const About = ({title, subtitle, note, profile, skills}) => {
    const profileImage = <div className="profile-image "></div>
    const downloadIcon = <FcDownload className="button-icon"/>
    const hireMeIcon = <FaHandshake className="button-icon"/>

    return (
        <section className="about-section " id="about">
            
            <SectionHeader title={title} subtitle={subtitle} note={note} profileImage={profileImage} />
            <div className="about-row">
                {/* the profile  */}
                <div className="profile">
                    <h3 className="title-1">profile <FcManager className="fa-male"/></h3>
                    <p className="text">{profile}</p>
                    <div className="profile-content">
                        <div className="profile-item">
                            <h4><FcBusinessman /> full name</h4>
                            <p>eje nathaniel akenyi</p>
                        </div>
                        <div className="profile-item">
                            <h4> <FcCalendar /> date of birth</h4>
                            <p>march 24, 1993</p>
                        </div>
                        <div className="profile-item">
                            <h4> <FcBriefcase /> job description</h4>
                            <p>web developer / graphics designer</p>
                        </div>
                        <div className="profile-item web">
                            <h4><MdMail /> email</h4>
                            <p>eje.nathaniel@gmail.com</p>
                        </div>
                        <div className="profile-item web">
                            <h4><FcWebcam /> website</h4>
                            <p>www.nathaniel.eu5.org</p>
                        </div>
                        
                        
                    </div>
                </div>

                <div className="seperator"></div>

                {/* the skills */}
                <div className="skills">
                    <h3 className="title-1">skills <FaScrewdriver className="Fa-screwdriver"/></h3>
                    <p className="text">{skills}</p>
                    <div className="skills-content">
                        <Skill skillName={'HTML'} skillPercentage={34} />
                        <Skill skillName={'CSS'} skillPercentage={70} />
                        <Skill skillName={'SCSS'} skillPercentage={64} />
                        <Skill skillName={'JavaScript'} skillPercentage={52} />
                        <Skill skillName={'ReatJs'} skillPercentage={75} />
                        <Skill skillName={'Bootstrap'} skillPercentage={70} />
                        <Skill skillName={'WordPress'} skillPercentage={80} />
                        
                    </div>
                </div>

            </div>
            
            <div className="about-buttons">
                <Button name={'Curiculum Vitae'} icon={downloadIcon}/>
                <Button name={'Hire me'} icon={hireMeIcon}/>
                
            </div>
        </section>
    )
}

About.defaultProps = {
    title: 'about',
    subtitle: 'Let me introduce myself',
    note: 'I am a web developer and a full blown graphics designer. I am passionate about web design, development and interaction. I can design and build with HTML, CSS, SCSS , Javascript, ReactJs, php, Wordpress, Bootstrap and a lttle laravel. I really love what I do.',
    profile: 'An enthusiastic, organized, and reliable individual. A graduate of computer science, with strong and diverse background in software development, programming, computer architecture, operation system, data structures and high honors in undergraduate studies, plus excellent communication and time management skills. ',
    skills: 'I am go at using HTML, CSS, SCSS, PHP, JavaScript, ReactJs, Wordpress, Bootstrap, laravel and Corel Draw. For instance, I built this version of portfolio with ReactJs and the previous versions from scratch with pure HTML5, CSS3, and JavaScript.',

}

export default About
