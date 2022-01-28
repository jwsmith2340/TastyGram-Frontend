// IMPORT LINK
import { Link } from "react-router-dom";
import './Home.scss'

const Home = (props) => {
    // Loaded Function
    const loaded = () => {
        return props.foods.map((eachFood) => (
            <div className="home-box">
                <div key={eachFood._id} className="home-inner-box">
                    <div className="image-link">
                        <Link to={`/food/${eachFood._id}`}><img src={eachFood.image} alt={eachFood.title} /></Link>
                    </div>
                    <h3>{eachFood.title}</h3>
                </div>
                <div className="footer-space-box">
                </div>
            </div>
        ));
    };
    // Loading Function
    const loading = () => {
        return <h1>Loading...</h1>
    }
    return (
        <>
            {props.foods ? loaded() : loading()}
        </>
    )
};

export default Home;