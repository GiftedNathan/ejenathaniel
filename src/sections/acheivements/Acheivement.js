import './acheivement.css'

// import { FaClock, FaLightbulb } from 'react-icons/fa'

const Ideas = () => {
    return (
        <div className="acheivement-section">
            <div className="acheivement">
                <i className="fas fa-clock "></i>
                <h3 className="acheivement-figue">1436</h3>
                <p className="acheivement-text">hours</p>
            </div>
            <div className="acheivement">
                <i className="fas fa-lightbulb "></i>
                <h3 className="acheivement-figue">54</h3>
                <p className="acheivement-text">crazy ideas</p>
            </div>
            <div className="acheivement">
                <i className="fas fa-project-diagram "></i>
                <h3 className="acheivement-figue">15</h3>
                <p className="acheivement-text">projects</p>
            </div>
            <div className="acheivement">
                <i className="fas fa-people-carry "></i>
                <h3 className="acheivement-figue">4</h3>
                <p className="acheivement-text">clients</p>
            </div>
            <div className="acheivement">
                <i className="fas fa-chalkboard-teacher "></i>
                <h3 className="acheivement-figue">24</h3>
                <p className="acheivement-text">tutorials</p>
            </div>
        </div>
    )
}

export default Ideas
