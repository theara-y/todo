import { useState } from "react";

const NewTodoForm = ({addTodo}) => {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text != "") {
            addTodo({text, done: false});
            setText("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange} placeholder="Add Todo..."/>
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodoForm;