// IMPORT LINK
import { Link } from "react-router-dom";
import './Home.scss'

const Dashboard = (props) => {
    // Loaded Function
    //console.log('food props', props.foods[4].key)
    //console.log(props)
    const loaded = () => {
        return props.foods.map((eachFood) => (
            (eachFood.key === props.user.uid) &&
            <div className="home-box">
                <div key={eachFood._id} className="home-inner-box">
                    <div className="image-link">
                        <Link to={`/food/${eachFood._id}`} className="link-element"><img src={eachFood.image} alt={eachFood.title} /></Link>
                    </div>
                    <Link to={`/food/${eachFood._id}`} className="link-element"><div className="mob-title">
                        <h3>{eachFood.title}</h3>
                    </div></Link>
                </div>
                <div className="footer-space-box">
                </div>
            </div>
        ));
    };
    // Loading Function
    const loading = () => {
        return (
            <div className="loading-box">
                <div className="loading-animation"></div>
            </div>
        )
    }
    return (
        <>
            {props.foods ? loaded() : loading()}
        </>
    )
};

export default Dashboard;