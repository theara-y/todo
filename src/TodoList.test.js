import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders", () => {
    render(<TodoList />);
});

it("matches snapshots", () => {
    const { asFragment } = render(<TodoList />)
    expect(asFragment()).toMatchSnapshot();
})

it("creates a todo", () => {
    const { container } = render(<TodoList />);

    // create a new todo
    const newTodoInp = screen.getByPlaceholderText("Add Todo...");
    fireEvent.change(newTodoInp, { target: { value: "test todo" } });
    const newTodoBtn = screen.getByText("Add Todo");
    fireEvent.click(newTodoBtn);

    // todo exists
    screen.getByText("test todo")

    // edit the todo
    const editTodoBtn = screen.getByText("Edit");
    fireEvent.click(editTodoBtn);
    const editTodoInp = screen.getByPlaceholderText("Edit Todo...");
    fireEvent.change(editTodoInp, { target: { value: "test todo 2" } });
    const saveTodoBtn = screen.getByText("Save");
    fireEvent.click(saveTodoBtn);

    // todo changed
    screen.getByText("test todo 2");

    // delete the todo
    const deleteTodoBtn = screen.getByText("X");
    fireEvent.click(deleteTodoBtn);

    // todo is deleted
    expect(screen.queryByText("test todo 2")).not.toBeInTheDocument();
});