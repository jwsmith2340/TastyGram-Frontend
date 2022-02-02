import './Footer.scss'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BiRun } from 'react-icons/bi'


const Footer = (props) => {
    return (

        <footer>
            
            <div className="footer-box">

                <div className="dt-about-box">
                    <h4><BiRun /></h4>
                </div>

                <div className="mob-name-box">
                    <a href="https://www.linkedin.com/in/jaredbradley95/" target="_blank"><FaLinkedin />Jared Bradley</a>
                    <a href="https://www.linkedin.com/in/jwsmith2340/" target="_blank"><FaLinkedin />James Smith</a>
                    <a href="https://www.linkedin.com/in/micah-stewart-00a213228/" target="_blank"><FaLinkedin />Micah Stewart</a>
                </div>

                <div className="mob-repo-box">
                    <a href="https://github.com/Jab7red/Project-3-frontend" target="_blank"><FaGithub /> Frontend </a>
                    <a href="https://github.com/Micahlou/RecipeApp-Backend" target="_blank"><FaGithub /> Backend </a>
                </div>
                
            </div>

        </footer>
    )
};

export default Footer;