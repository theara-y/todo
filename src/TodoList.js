import NewTodoForm from "./NewTodoForm";
import { useState } from "react";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const addTodo = ({text, done}) => {
        setTodos(oldTodos => {
            const newTodos = JSON.parse(JSON.stringify(oldTodos));
            return [...newTodos, {text, done}]
        });
    };

    const updateTodo = (idx, todo) => {
        setTodos(oldTodos => {
            const newTodos = JSON.parse(JSON.stringify(oldTodos));
            newTodos[idx] = todo;
            return newTodos;
        });
    };

    const removeTodo = (idx) => {
        setTodos(oldTodos => {
            return oldTodos.slice(0, idx).concat(oldTodos.slice(idx + 1));
        });
    };

    return (
        <>
            <NewTodoForm addTodo={addTodo} />
            {
                todos.map((todo, idx) =>
                    <Todo
                        key={uuid()}
                        todo={todo}
                        idx={idx}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                    />)
            }
        </>
    );
};

export default TodoList;