import './links.css'
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'


export const Links = () => {
    return (
        <div className="social-links">
            <a href="https://www.github.com/giftednathan" target="_blank" rel="noreferrer">
                <FaGithub className="fab fa-whatsapp" />
            </a>
            <a href="https://www.linkedin.com/in/nathaniel-akenyi-eje" target="_blank" rel="noreferrer">
                <FaLinkedin className="fab fa-linkedin" />
            </a>
            <a href="https://www.twitter.com/eje_nathaniel" target="_blank" rel="noreferrer">
                <FaTwitter className="fab fa-twitter" />
            </a>
            <a href="https://www.facebook.com/eje.nathaniel" target="_blank" rel="noreferrer">
                <FaFacebook className="fab fa-facebook" />
            </a>
            {/* <a href="https://www.youtube.com/channel/UCXuGb8ghyaTLc0deDKdDs3Q" target="_blank" rel="noreferrer">
                <FaYoutube className="fab fa-youtube" />
            </a> */}
            {/* <a href="https://www.github.com/giftednathan" target="_blank" rel="noreferrer">
                <FaGithub className="fab fa-whatsapp" />
            </a> */}
        </div>
    )
}

export default Links
