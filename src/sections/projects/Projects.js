import Button from '../../components/button/Button'
import { SectionHeader } from '../../components/section-header/SectionHeader'
import './projects.css'

import studentTaxHelpImage from '../../assets/images/studenttaxhelp.PNG';
import rulebornImage from '../../assets/images/ruleborn.PNG';
import isoxImage from '../../assets/images/isox.PNG';
import emcaImage from '../../assets/images/emca.PNG';
import magnumopusImage from '../../assets/images/magnumopus.PNG';
import baynetfuseImage from '../../assets/images/baynetfuse.PNG';
import onomeImage from '../../assets/images/onome.PNG';
import edublokImage from '../../assets/images/Edublok.PNG';
import praiseImage from '../../assets/images/Praise.PNG';

import animatedIconsImage from '../../assets/images/animated-icons.PNG';
import easyRecipeImage from '../../assets/images/easyrecipe.PNG';
import ejeImage from '../../assets/images/eje.PNG';
import kryptolandImage from '../../assets/images/kryptoland.PNG';
import translatorImage from '../../assets/images/translator.PNG';

const Projects = ({ title, subtitle, note }) => {
    return (
        <div id="portfolio" className="projects-section">

            {/* WordPress projects  */}
            <SectionHeader title={title} subtitle={subtitle} paddingValue={'10px'} note={`Okay, let's take a look at some of the websites I have created with WordPress recently.`} />
            <div className="project-container">
                <div className="project">
                    <img src={praiseImage} className="project-image" alt="praise child care" />
                    <a href='https://praisechildcare.ca/' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <img src={baynetfuseImage} className="project-image" alt="baynetfuse" />
                    <a href='https://baynetfuse.com/' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <img src={magnumopusImage} className="project-image" alt="magnumopus" />
                    <a href='https://magnumopus.com.ng/' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <img src={onomeImage} className="project-image" alt="onome food market" />
                    <a href='https://onomefoodmarket.com/' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <img src={studentTaxHelpImage} className="project-image" alt="student tax help" />
                    <a href='https://studenttaxhelp.ca/' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <img src={rulebornImage} className="project-image" alt="ruleborn integrated" />
                    <a href='https://rulebornintegrated.com/' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <img src={isoxImage} className="project-image" alt="isox ltd" />
                    <a href='https://isoxltd.com/' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <img src={emcaImage} className="project-image" alt="emca accounting" />
                    <a href='https://www.emcaaccounting.ca/' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <img src={edublokImage} className="project-image" alt="edublok" />
                    <a href='https://edublok.koinwa.com/' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>

            </div>

            {/* ReactJs and Javascript projects */}
            <h3 className='category-title'>ReactJs and Javascript projects</h3>
            <div className="project-container">

                <div className="project">
                    <img src={easyRecipeImage} className="project-image" alt="easy recipe" />
                    <p className="project-text">
                        A recipe app that fetches a list of all
                        recipes from external API and provide dynamic
                        search functionality.
                    </p>
                    <a href='https://easyrecipee.netlify.app/' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <img src={kryptolandImage} className="project-image" alt="kryptoland" />
                    <p className="project-text">
                        One stop home for all information about crytocurencies; including
                        top cryptcurencies, cryptcurency prices, market trends, crypto news,
                        exchanges and others.
                    </p>
                    <a href='https://kryptoland.netlify.app/' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>

                <div className="project">
                    <img src={translatorImage} className="project-image" alt="language translator" />
                    <p className="project-text">
                        A simple language translator with text-to-voice and copy functionality.
                    </p>
                    <a href="https://giftednathan.github.io/translator" target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <img src={animatedIconsImage} className="project-image" alt="animated weather icons" />
                    <p className="project-text">
                        An animated weather icons for the various weather conditions.
                        It is built with HTML AND CSS.
                    </p>
                    <a href='https://giftednathan.github.io/animated-weather-icons' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <img src={ejeImage} className="project-image" alt="eje nathaniel" />
                    <p className="project-text">
                        This is fully responsive portfolio with multiple sections.
                        It has various animations and support mobile, desktop, and tablet screen sizes.
                    </p>
                    <a href="https://ejenathaniel.netlify.app/" rel="noreferrer">
                        <Button name={'Check it out'} />
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
