import React from "react";
import style from './home.css';
import Form from "./Form";
import { v4 as uuidv4 } from 'uuid';
import { FaTrashAlt } from "react-icons/fa";

const todos = [
    {
        id : 1,
        title : 'Maruf Akash',
        des : 'This is Maruf Akash from Bangladesh.'
    },
    {
        id : 2,
        title : 'Tanzilla Monisha',
        des : 'My name is Tanzilla Monisha from Uguanda.'
    }
]

const Home = () => {
    const handleAddTodo = (todo) => {
        console.log(todo);
    }

    return (
        <div className="home">
            <h1>Todo App Using UseReducer</h1>
            <Form onAddTodo={handleAddTodo} />
            <section>
                {todos && todos.map((todo) => {
                    const {id, title, des} = todo;
                    return (
                        <article key={uuidv4()} className="card">
                            <div>
                                <h3>{title}</h3>
                                <p>{des}</p>
                            </div>
                            <div>
                                <button><FaTrashAlt /></button>
                            </div>
                        </article>
                    )
                })}
            </section>
        </div>
    )
}

export default Home;