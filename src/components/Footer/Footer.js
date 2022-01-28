import './Footer.scss'

const Footer = (props) => {
    return (

        <footer>
            <div className="footer-box">
            <div className="mob-name-box">
                <h4><span>&copy;</span>Jared Bradley</h4>
                <h4><span>&copy;</span>James Smith</h4>
                <h4><span>&copy;</span>Micah Stewart</h4>
            </div>
            <div className="mob-repo-box">
                <a href="https://github.com/Jab7red/Project-3-frontend">Frontend Git Repo</a>    
            </div>
            </div>  

        </footer>
    )
};

export default Footer;