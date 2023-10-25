import { render } from "@testing-library/react";
import Todo from "./Todo";

const MOCK_TODO = {
    text: "test todo",
    done: false
}
it("renders", () => {
    render(<Todo todo={MOCK_TODO}/>);
});

it("matches snapshots", () => {
    const { asFragment } = render(<Todo todo={MOCK_TODO}/>)
    expect(asFragment()).toMatchSnapshot();
})