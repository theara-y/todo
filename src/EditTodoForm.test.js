import { render } from "@testing-library/react";
import EditTodoForm from "./EditTodoForm";

it("renders", () => {
    render(<EditTodoForm/>);
});

it("matches snapshots", () => {
    const { asFragment } = render(<EditTodoForm/>)
    expect(asFragment()).toMatchSnapshot();
})