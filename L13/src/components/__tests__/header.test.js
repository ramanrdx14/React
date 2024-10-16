import {fireEvent, render,screen} from "@testing-library/react"
import Header from "../Header"
import appStore from "../../utils/appStore"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
it('should Render the headr compont with the login button',()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header></Header>
    </Provider>
    </BrowserRouter>
);

const loginButton = screen.getByRole('button');

//If there are multiple button but we have to find the login  button .
//const loginButton = screen.getByRole('button',{name:'login'});
expect(loginButton).toBeInTheDocument();
})

test('Render with the cart Items Zero',()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header></Header>
        </Provider>
        </BrowserRouter>
    );

    const cart = screen.getByText('🛒');
    expect(cart).toBeInTheDocument();
})

test('It should login to logout on test',()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header></Header>
        </Provider>
        </BrowserRouter>
    );


    //pehle login button ko khojenge
    const login = screen.getByText('Login');

    //fir uso logout krdenge
    fireEvent.click(login);

    //fir logout ko khojenge
    const logout= screen.getByText('Logout');

    fireEvent.click(logout);
})