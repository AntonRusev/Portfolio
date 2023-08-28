import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import { Contact } from "./Contact";

describe('Testing the Contact Component', () => {
    test('show heading', () => {
        render(
            <BrowserRouter>
                <Contact />
            </BrowserRouter>
        );

        expect(screen.getByText(/contact/i)).toBeInTheDocument();
    });

    test('Send button is disabled', async () => {
        render(
            <BrowserRouter>
                <Contact />
            </BrowserRouter>
        );

        const sendBtn = await screen.findByText(/send/i);
        expect(sendBtn).toBeDisabled();
    });

    test('social media links to have correct href', async () => {
        render(
            <BrowserRouter>
                <Contact />
            </BrowserRouter>
        );

        const links = screen.getAllByRole('link');

        expect(links[0]).toHaveAttribute('href', 'https://github.com/AntonRusev');
        expect(links[1]).toHaveAttribute('href', 'https://www.linkedin.com/in/anton-rusev-9861a5277/');
    });

    test('input fields exist', () => {
        render(
            <BrowserRouter>
                <Contact />
            </BrowserRouter>
        );

        const [usernameInput, emailInput, messageInput] = (screen.getAllByRole("textbox"));

        expect(usernameInput).toBeInTheDocument();
        expect(usernameInput).toHaveAttribute("name", "user_name");

        expect(emailInput).toBeInTheDocument();
        expect(emailInput).toHaveAttribute("name", "user_email");

        expect(messageInput).toBeInTheDocument();
        expect(messageInput).toHaveAttribute("name", "message");
    });

    test('input accept data', async () => {
        const user = userEvent.setup();

        render(
            <BrowserRouter>
                <Contact />
            </BrowserRouter>
        );

        const [usernameInput, emailInput, messageInput] = (screen.getAllByRole("textbox"));

        await user.type(usernameInput, "user's name");
        expect(usernameInput).toHaveValue("user's name");

        await user.type(emailInput, "test@mail.com");
        expect(emailInput).toHaveValue("test@mail.com");

        await user.type(messageInput, "user's message");
        expect(messageInput).toHaveValue("user's message");
    });
});