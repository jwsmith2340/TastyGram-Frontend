import { login, logout } from "../../services/firebase";
import { Link } from "react-router-dom";
import './Header.scss'
import { FaHome, FaPlus } from 'react-icons/fa'

const Header = (props) => {
    return (
        <nav>
            <div className="mob-link-box-left mob-link-boxes">
                <Link to="/" className="link">
                    <h4><FaHome /></h4>
                </Link>
            </div>

            <h2 className="mob-logo">TG</h2>
            <h2 className="dt-logo">TastyGram</h2>

            <div className="mob-link-box-right mob-link-boxes">
            <ul>
                {
                    props.user ?
                    <>
                    {/* <li>Signed in as: {props.user.displayName}</li> */}
                    <li className="google-photo">
                        <img className="google-photo"
                            src={props.user.photoURL}
                            alt={props.user.displayName}
                        />
                    </li>
                    {/* <li><button className="log" onClick={logout}>Logout</button></li> */}
                    </>
                    :
                    <li><button className="log" onClick={login}>Login</button></li>
                }

                </ul>

                <Link to="/newfood" className="link">
                    <h4><FaPlus /></h4>
                </Link>
            </div>
        </nav>
    )
};

export default Header;