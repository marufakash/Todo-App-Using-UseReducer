import React, { useState } from "react";
import style from './form.css';

const Form = (props) => {
    const [todos, setTodos] = useState({title: '', des: ''});
    const {title, des} = todos;

    const handleChange = (e) => {
        setTodos((prevTodos) => {
            return {...prevTodos, [e.target.name]: e.target.value};
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddTodo(todos);
        setTodos({title: '', des: ''});
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title : </label>
                    <input type="text" value={title} onChange={handleChange} name="title" required />
                </div>
                <div>
                    <label htmlFor="des">Description : </label>
                    <textarea name="des" value={des} onChange={handleChange} cols="30" rows="5" required></textarea>
                </div>
                <div>
                    <button type="submit">Add Todo</button>
                </div>
            </form>
        </div>
    )
}

export default Form;