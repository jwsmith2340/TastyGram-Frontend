import { Link } from "react-router-dom";
import './Header.scss'

const Header = (props) => {
    return (
        <nav>
            <div className="mob-link-boxes">
                <Link to="/" className="link">
                    <h4>Home</h4>
                </Link>
            </div>

            <h2 className="mob-logo">TG</h2>
            <h2 className="dt-logo">TastyGram</h2>

            <div className="mob-link-boxes">
                <Link to="/newfood" className="link">
                    <h4>New Post</h4>
                </Link>
            </div>
        </nav>
    )
};

export default Header;