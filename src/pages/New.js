// IMPORT STATE FROM REACT
import { useState } from "react";
import './New.scss'

const New = (props) => {
    // STATE TO HOLD FORMDATA
    const [newForm, setNewForm] = useState({
        title: "",
        image: "",
        description: "",
    });

    // HANDLECHANGE FUNCTION FOR FORM
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    //HANDLESUBMIT FUNCTION FOR FORM
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createFood(newForm);
        setNewForm({
            title: "",
            image: "",
            description: "",
        });
    };
    return (
        <div className="new-box">
            <div className="title-box">
                <h1>New Recipe Form</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-boxes">
                    <h3>Title</h3>
                    <input type="text" value={newForm.title} name="title" placeholder="title" onChange={handleChange} />
                    <h3>Image</h3>
                    <input type="text" value={newForm.image} name="image" placeholder="image URL" onChange={handleChange} />
                    <h3>Description</h3>
                    <input type="text" value={newForm.description} name="description" placeholder="description" onChange={handleChange} />
                </div>
                <br />
                <input type="submit" value="Create Recipe" className="post-button"/>
            </form>
        </div>
    )
};

export default New;