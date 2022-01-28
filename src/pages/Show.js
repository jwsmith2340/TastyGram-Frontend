import './Show.scss'

const Show = (props) => {
    //SET UP VARIABLES
    const id = props.match.params.id;
    const foods = props.foods;
    const eachFood = foods.find(f => f._id === id);

    return (
        <div className="show-box">
            <div className="inner-show-box">
                <h1>{eachFood.title}</h1>
                <img src={eachFood.image} alt={eachFood.title} />
                <h2>{eachFood.description}</h2>
            </div>
        </div>
    );
};

export default Show;