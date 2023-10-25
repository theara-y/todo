import { useState } from "react";

const EditTodoForm = ({changeText, currentTodo}) => {
    const INIT = currentTodo;
    const [text, setText] = useState(INIT);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text == "") {
            changeText(INIT);
        } else {
            changeText(text);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange} placeholder="Edit Todo..."/>
            <button>Save</button>
        </form>
    );
};

export default EditTodoForm;