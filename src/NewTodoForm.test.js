import { render } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("renders", () => {
    render(<NewTodoForm/>);
});

it("matches snapshots", () => {
    const { asFragment } = render(<NewTodoForm/>)
    expect(asFragment()).toMatchSnapshot();
})