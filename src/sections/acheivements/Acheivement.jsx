import './acheivement.css'

// import { FaClock, FaLightbulb } from 'react-icons/fa'

const Ideas = () => {
    return (
        <div className="acheivement-section">
            <div className="acheivement">
                <i className="fas fa-chalkboard-teacher"></i>
                <h3 className="acheivement-figue">36+</h3>
                <p className="acheivement-text">Websites</p>
            </div>
            <div className="acheivement">
                <i className="fas fa-project-diagram "></i>
                <h3 className="acheivement-figue">31</h3>
                <p className="acheivement-text">projects</p>
            </div>
            <div className="acheivement">
                <i className="fas fa-people-carry "></i>
                <h3 className="acheivement-figue">24</h3>
                <p className="acheivement-text">clients</p>
            </div>
            <div className="acheivement">
                <i className="fas fa-clock "></i>
                <h3 className="acheivement-figue">40hr/w</h3>
                <p className="acheivement-text">available</p>
            </div>
            <div className="acheivement">
                <i className="fas fa-lightbulb "></i>
                <h3 className="acheivement-figue">54</h3>
                <p className="acheivement-text">crazy ideas</p>
            </div>
        </div>
    )
}

export default Ideas
