import { useState } from "react";
import "./Todo.css";
import EditTodoForm from "./EditTodoForm";

const Todo = ({ todo, idx, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState(false);

    const toggleDone = () => {
        const { text, done } = todo
        updateTodo(idx, { text, done: !done })
    };

    const toggleEdit = () => {
        setEdit(!edit);
    };

    const changeText = (newText) => {
        // toggleEdit();
        const { done } = todo;
        updateTodo(idx, { text: newText, done });
    };

    return (
        <>
            {edit ?
                <EditTodoForm changeText={changeText} currentTodo={todo.text} /> :
                <div>
                    <div
                        className={todo.done ? "Todo-done" : ""}
                        onClick={toggleDone}>{todo.text}
                    </div>
                    <button onClick={() => removeTodo(idx)}>X</button>
                    <button onClick={toggleEdit}>Edit</button>
                </div>

            }
        </>
    );
};

export default Todo;