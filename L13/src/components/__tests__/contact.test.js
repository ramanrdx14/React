import {render,screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import Contact from "../Contact"
test("contact use page is loded or not ",()=>{


    //Weather this heading is rendered in the screen or not
    render(<Contact></Contact>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

test("Button is there in page or not ",()=>{


    //should load the button inside the compone or not.
    render(<Contact></Contact>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
})

test("Should show the 1 input boxes ",()=>{


    //should load the button inside the compone or not.
    render(<Contact></Contact>);
    const input = screen.getAllByRole("textbox");
    expect(input.length).toBe(1);
})