import { Link } from "react-router-dom";
import './Header.scss'

const Header = (props) => {
    return (
            <nav>
                <Link to="/" className="link">
                    <h4>Home</h4>
                </Link>
                <br />
                <Link to="/newfood" className="link">
                    <h4>New Post</h4>
                </Link>
            </nav>
    )
};

export default Header;