// IMPORT STATE
import { Link } from 'react-router-dom';

import './Show.scss'

const Show = (props) => {
    console.log('props', props.user.uid)
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
        console.log('food key', eachFood.key);


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
                        (props.user.uid === eachFood.key) ? <Link to={`/food/edit/${eachFood._id}`}><button>EDIT</button></Link> : console.log('null')
                    }
                    
                </div>
            </div>
        );

    }
};

export default Show;