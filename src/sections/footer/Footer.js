import Links from '../../components/social_links/Links'
import './footer.css'
import { FaSearchLocation, FaEnvelope, FaPhone } from 'react-icons/fa'


const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer-container">
                <div className="footer-item">
                    <FaSearchLocation className="footer-icon"/>
                    <p className="footer-title">
                        where to find me
                    </p>
                    <p className="footer-text">
                        s3/13 hudco quarters north bank, makurdi
                        benue
                    </p>
                </div>
                <div className="footer-item">
                    <FaEnvelope className="footer-icon"/>
                    <p className="footer-title">
                        email me at
                    </p>
                    <p className="footer-text footer-email">
                        eje.nathaniel@gmail.com 
                        eje.nathaniel@yahoo.com
                    </p>
                </div>
                <div className="footer-item">
                    <FaPhone className="footer-icon"/>
                    <p className="footer-title">
                        call me at
                    </p>
                    <p className="footer-text">
                        phone: (+234) 810 38722 83
                    </p>
                </div>
            </div>

            <Links />

            <p className="copy-right">
                &copy; Eje Nathaniel 2021 
                Design with much love: Inpiration from Stylshout
            </p>

        </div>
    )
}


export default Footer
