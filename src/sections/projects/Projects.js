import Button from '../../components/button/Button'
import { SectionHeader } from '../../components/section-header/SectionHeader'
import './projects.css'

const Projects = ({title, subtitle, note}) => {
    return (
        <div id="portfolio" className="projects-section">
            <SectionHeader title={title} subtitle={subtitle} note={note} />
            <div className="project-container">
                <div className="project">
                    <h3 className="project-title">
                        Weather App
                    </h3>
                    <p className="project-text">
                        An application that forecast the 
                        current weather for any city in the world.
                    </p>
                    <Button name={'Check it out'}/>
                </div>
                <div className="project">
                    <h3 className="project-title">
                        My Portfolio 
                    </h3>
                    <p className="project-text">
                        I built this current version of portfolio
                        with ReactJs, while the previous with HTML CSS and JavaScript. 
                    </p>
                    <Button name={'Check it out'}/>
                </div>
                <div className="project">
                    <h3 className="project-title">
                        Easy Baby
                    </h3>
                    <p className="project-text">
                        Help determine the sex, genotype, blood group and
                        EDT of a baby + women's most fertile periods.
                    </p>
                    <Button name={'Check it out'}/>
                </div>
                <div className="project">
                    <h3 className="project-title">
                        Many More
                    </h3>
                    <p className="project-text">
                        Trust me, i have more project 
                        that currently aren't showcased here. 
                    </p>
                    <Button name={'Check it out'}/>
                </div>
            </div>
        
        
        </div>
    )
}

Projects.defaultProps = {
    title: 'projects',
    subtitle: 'Check Out Some Of My Works',
    note: 'A series of projects ranging from web devlopment and design to graphics design',
}

export default Projects
