import Button from '../../components/button/Button'
import { SectionHeader } from '../../components/section-header/SectionHeader'
import './projects.css'

import studentTaxHelpImage from '../../assets/images/studenttaxhelp.PNG'
import rulebornImage from '../../assets/images/ruleborn.PNG'
import isoxImage from '../../assets/images/isox.PNG'
import emcaImage from '../../assets/images/emca.PNG'

const Projects = ({ title, subtitle, note }) => {
    return (
        <div id="portfolio" className="projects-section">
            <SectionHeader title={title} subtitle={subtitle} note={note} />
            <div className="project-container">
                <div className="project">
                    <img src={studentTaxHelpImage} class="project-image" alt="student tax help" />
                    <h3 className="project-title">
                        Student Taxt Help
                    </h3>
                    <p className="project-text">
                        Filling of student taxes became easy with this wordpress website
                    </p>
                    <a href='https://studenttaxhelp.ca/' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <img src={rulebornImage} class="project-image" alt="student tax help" />
                    <h3 className="project-title">
                        Ruleborn intergrated
                    </h3>
                    <p className="project-text">
                        Ruleborn intergrated  wordpress website
                    </p>
                    <a href='https://rulebornintegrated.com/' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <img src={isoxImage} class="project-image" alt="student tax help" />
                    <h3 className="project-title">
                        Isox tech limited
                    </h3>
                    <p className="project-text">
                        Isox tech limited wordpress website
                    </p>
                    <a href='https://isoxltd.com/' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <img src={emcaImage} class="project-image" alt="student tax help" />
                    <h3 className="project-title">
                        EMCA
                    </h3>
                    <p className="project-text">
                        EMCA wordpress website
                    </p>
                    <a href='https://www.emcaaccounting.ca/' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>


                <div className="project">
                    <h3 className="project-title">
                        Easyrecipe
                    </h3>
                    <p className="project-text">
                        A simple recipe app that fetches a list of all
                        recipes from external API and provide dynamic
                        search functionality.
                    </p>
                    <p className="project-technology">
                        <span>Concepts Used:</span> React router dom, React Hooks, components, props, useState(),
                        useEffect() with managing dependencies, handling HTML input in React.
                        Fetch API, JS Promises, and callback. React Styled Components; styling with flexbox and grid.
                    </p>
                    <a href='https://easyrecipee.netlify.app/' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <h3 className="project-title">
                        My Portfolio
                    </h3>
                    <p className="project-text">
                        This is fully responsive portfolio website using react with multiple sections.
                        It has various animations and support mobile, desktop, and tablet screen sizes.
                    </p>
                    <p className="project-technology">
                        <span>Concepts Used:</span> React Icons, React Hooks, components,
                        props, useState(), react-router. TypedJS for some animations.
                        CSS styling with flexbox, variables, animations and many more.
                    </p>
                    <a href="https://ejenathaniel.netlify.app/" rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <h3 className="project-title">
                        Translator
                    </h3>
                    <p className="project-text">
                        A simple language translator with text-to-voice and copy functionality.
                    </p>
                    <p className="project-technology">
                        <span>Concepts Used:</span> The Memory API was used to build the tranlation functionality.
                        The web speech API in JavaScript was used to tranplate the text to speech.
                        Tha Asynchronous clipboard API was used to build the copy funtionality.
                        CSS styling with flexbox and many more.
                    </p>
                    <a href="https://giftednathan.github.io/translator" target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <h3 className="project-title">
                        Animated Weather icons
                    </h3>
                    <p className="project-text">
                        An animated weather icons for the various weather conditions.
                        It is built with HTML AND CSS.
                    </p>

                    <p className="project-technology">
                        <span>Concepts Used:</span> HTML and CSS styling with flexbox, variables,
                        keyfram animations and many more.
                    </p>
                    <a href='https://giftednathan.github.io/animated-weather-icons' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <h3 className="project-title">
                        Many More
                    </h3>
                    <p className="project-text">
                        Trust me, i have more project
                        that currently aren't showcased here. Hit the button
                        below to view my github repositories.
                    </p>
                    <p className="project-technology">
                        <span>Different projects built with:</span> ReactJs (React router dom, React Hooks, components, props, useState(),
                        useEffect() React Styled components) Javascrips, SCSS, APIs
                        and many more.
                    </p>
                    <a href='https://www.github.com/giftednathan' target='_blank' rel="noreferrer">
                        <Button name={'More on GitHub'} />
                    </a>
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
