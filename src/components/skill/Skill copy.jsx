import './skill.css'

const Skill = ({skillName, skillPercentage}) => {
    return (
        <div id={skillName} className="skill" skillname={skillName}  >  
            <div className="progress " style={{width: skillPercentage +'%'}} >{ skillPercentage +'%'}</div>
        </div>
    )
}
 
Skill.defaultProps ={
    skillName: 'skill Name',
    skillPercentage: 46,
}

export default Skill
