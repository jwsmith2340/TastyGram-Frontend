// IMPORT STATE
import { Link } from 'react-router-dom';

import './Show.scss'

const Show = (props) => {
    if (!props.foods) {
        return (
            <div className="loading-box">
                <div className="loading-animation"></div>
            </div>
        )
    } else {
        //SET UP VARIABLES
        const id = props.match.params.id;
        const foods = props.foods;
        const eachFood = foods.find(f => f._id === id);
        //console.log('food key', eachFood.key);


        return (
            <div className="show-box">
                <div className="inner-show-box">
                    <div className="recipe-title-box">
                        <h1>{eachFood.title}</h1>
                    </div>
                    <div className="image-box">
                        <img src={eachFood.image} alt={eachFood.title} />
                    </div>
                    <div className="description-box">
                        <h2>{eachFood.description}</h2>
                    </div>
                    {
                        props.user ? 
                        ( (props.user.uid === eachFood.key) && <Link to={`/food/edit/${eachFood._id}`}><button>EDIT</button></Link>) :
                        console.log('null')
                    }
                    {/* props.user.uid matches the eachFood.key only when the logged in user is the
                    one who created the item via a short circuit. This is inside a ternary to check
                    for a user, because if no user, the page will not render since there is no uid
                    to check against.  */}
                </div>
            </div>
        );

    }
};

export default Show;