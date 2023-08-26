import './skill.css'
import html5Icon from '../../assets/icons/html5.png'
import css3Icon from '../../assets/icons/css3.png'
import sassIcon from '../../assets/icons/sass.png'
import javascriptIcon from '../../assets/icons/javascript.png'
import wordpressIcon from '../../assets/icons/wordpress.png'
import reactIcon from '../../assets/icons/react.png'
import laravelIcon from '../../assets/icons/laravel.png'
import bootstrapIcon from '../../assets/icons/bootstrap.png'

const Skill = () => {
    return (
        <div className="skill">  
            <img src={reactIcon} alt="react logo" />
            <img src={laravelIcon} alt="laravel logo" />
            <img src={wordpressIcon} alt="wordpress logo" />
            <img src={bootstrapIcon} alt="bootstrap logo" />
            <img src={javascriptIcon} alt="javascript logo" />
            <img src={sassIcon} alt="sass logo" />
            <img src={css3Icon} alt="css3 logo" />
            <img src={html5Icon} alt="html5 logo" />
        </div>
    )
}
 
Skill.defaultProps ={
    skillName: 'skill Name',
    skillPercentage: 46,
}

export default Skill
