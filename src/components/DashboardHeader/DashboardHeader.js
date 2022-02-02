import { BiLogOut } from 'react-icons/bi'
import { logout } from "../../services/firebase";
import { Redirect, Link } from "react-router-dom";
import './DashboardHeader.scss'

function DashboardHeader(props) {
    console.log(props.user.displayName)
    return (
        props.user ?
        <div className="dash-header-box">
            <div className="space-box"></div>
            <div className="name-box"><h2>{props.user.displayName}</h2></div>
            <div className="logout-box">
                <Link to="/" className="dh-link">
                <   h4 className="logout" onClick={logout}><BiLogOut /></h4>
                </Link>
            </div>
        </div>
              :
              <Redirect to="/" />
    )
}

export default DashboardHeader