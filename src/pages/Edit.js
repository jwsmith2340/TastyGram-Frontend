import { useState } from 'react';

import './Edit.scss';

const Edit = (props) => {
    //SET UP VARIABLES
    const id = props.match.params.id;
    const foods = props.foods;
    const eachFood = foods.find(f => f._id === id);

    // STATE FOR EDIT FORM
    const [editForm, setEditForm] = useState(eachFood);

    // HANDLECHANGE FUNCTION FOR FORM
    const handleChange = (event) => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value });
    };

    // HANDLESUBMIT FUNCTION FOR FORM
    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateFoods(editForm, eachFood._id);
        // REDIRECT BACK TO HOME
        props.history.push(`/food/${eachFood._id}`);
    };

    // REMOVE FOOD 
    const removeFood = () => {
        props.deleteFoods(eachFood._id);
        props.history.push("/");
    }
    return (
        <div>
            <div className="title-box"><h1>Edit Recipe</h1></div>
            <div className="edit-page-title-box">
                <h1>{eachFood.title}</h1>
            </div>
            <div className="edit-page-image-box">
                <img src={eachFood.image} alt={eachFood.title} />
            </div>
            <div className="edit-page-description-box">
                <h2>{eachFood.description}</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={editForm.title} name='title' placeholder='title' onChange={handleChange} />
                <input type="text" value={editForm.image} name='image' placeholder='image URL' onChange={handleChange} />
                <input type="text" value={editForm.description} name='description' placeholder='description' onChange={handleChange} />
                <input type="submit" value="Update" className="post-button"/>
            </form>
            <button onClick={removeFood} className="delete-button">DELETE</button>

        </div>
    );

};

export default Edit;