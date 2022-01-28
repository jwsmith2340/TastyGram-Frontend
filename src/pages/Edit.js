import { useState } from 'react';

import './Show.scss';

const Edit = (props) => {
    //SET UP VARIABLES
    const id = props.match.params.id;
    const foods = props.foods;
    const eachFood = foods.find(f => f._id === id);

    // STATE FOR EDIT FORM
    const [ editForm, setEditForm ] = useState(eachFood);

    // HANDLECHANGE FUNCTION FOR FORM
    const handleChange = (event) => {
        setEditForm({...editForm, [event.target.name]: event.target.value});
    };

    // HANDLESUBMIT FUNCTION FOR FORM
    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateFoods(editForm, eachFood._id);
        // REDIRECT BACK TO HOME
        props.history.push(`/food/${eachFood._id}`);
    };
    return (
        <div className="show-box">
            <div className="inner-show-box">
                <h1>{eachFood.title}</h1>
                <img src={eachFood.image} alt={eachFood.title} />
                <h2>{eachFood.description}</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={editForm.title} name='title' placeholder='title' onChange={handleChange}/>
                    <input type="text" value={editForm.image} name='image' placeholder='image URL' onChange={handleChange}/>
                    <input type="text" value={editForm.description} name='description' placeholder='description' onChange={handleChange}/>
                    <input type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
    
};

export default Edit;