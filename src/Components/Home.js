import React, { useReducer, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import style from './home.css';
import { FaTrashAlt } from "react-icons/fa";

const dummyTodos = [
    {id: 1, title: 'Jurney to the end of the world.'},
    {id: 2, title: 'Money heist to the bank Robbery.'}
]

const reducer = (state, action) => {
    if(action.type === 'ADD') {
        const allTodos = [...state.todos, action.payload];
        return {
            ...state,
            todos: allTodos
        }
    }else if(action.type === 'REMOVE') {
        const filteredTodos = [...state.todos.filter((todo) => todo.id !== action.payload)];
        return  {
            ...state,
            todos: filteredTodos
        }
    }
    return state;
}

const Home = () => {
    const [newTodos, dispatch] = useReducer(reducer, {
        todos: dummyTodos
    })

    const [todosName, setTodosName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {id: uuidv4(), title: todosName};
        dispatch({type: 'ADD', payload: newTodo});
        setTodosName('');
    }

    const removeTodos = (id) => {
        dispatch({type: 'REMOVE', payload: id})
    }

    return (
        <div className="home">
            <h1>Todo App Using UseReducer</h1>
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <label htmlFor="title">Title : </label>
                    <input type="text" value={todosName} onChange={(e) => setTodosName(e.target.value)} required />
                </div>
                <div>
                    <button type="submit">Add Todo</button>
                </div>
            </form>
            <section className="container">
                {newTodos.todos && newTodos.todos.map((todo) =>
                 <article key={uuidv4()}>
                    <h3>{todo.title}</h3>
                    <button onClick={() => {removeTodos(todo.id)}}><FaTrashAlt /></button>
                </article>)}
            </section>
        </div>
    )
}

export default Home;