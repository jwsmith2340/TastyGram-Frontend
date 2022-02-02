import { login } from "../../services/firebase";
import { Link } from "react-router-dom";
import './Header.scss'
import { FaHome, FaPlus } from 'react-icons/fa'
import { GoPerson } from 'react-icons/go'

const Header = (props) => {
    return (
        <nav>
            <div className="mob-link-box-left mob-link-boxes">
                <Link to="/" className="link">
                    <h4 className="h4-house"><FaHome /></h4>
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
                            <Link to="/dashboard" >
                        <li className="google-photo">
                            <img className="google-photo"
                                src={props.user.photoURL}
                                alt={props.user.displayName}
                                />
                        </li>
                            </Link>
                        
                        <Link to="/newfood" className="link">
                            <h4><FaPlus /></h4>
                        </Link>
                        </>
                        :
                        <li><h4 className="log" onClick={login}><GoPerson /></h4></li>
                    }
                </ul>
                    
                
            </div>
        </nav>
    )
};

export default Header;