// IMPORT STATE FROM REACT
import { useState } from "react";

const New = (props) => {
    // STATE TO HOLD FORMDATA
    const [ newForm, setNewForm ] = useState({
        title: "",
        image: "",
        description: "",
    });

    // HANDLECHANGE FUNCTION FOR FORM
    const handleChange = (event) => {
        setNewForm({...newForm, [event.target.name]: event.target.value});
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
        <section>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newForm.title} name="title" placeholder="title" onChange={handleChange}/>
                <input type="text" value={newForm.image} name="image" placeholder="image URL" onChange={handleChange}/>
                <input type="text" value={newForm.description} name="description" placeholder="description" onChange={handleChange}/>
                <input type="submit" value="POST FOOD" />
            </form>
        </section>
    )
};

export default New;