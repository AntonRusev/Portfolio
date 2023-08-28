import { render, screen } from "@testing-library/react";

import { Modal } from "./Modal";

describe('Testing the Modal Component', () => {
    test('show success message', () => {
        const formErrors = {
            username: '',
            email: '',
            message: '',
        }
        render(
            <Modal formErrors={formErrors} />
        );

        expect(screen.getByText(/Message Sent/i)).toBeInTheDocument();
    });

    test('show username validation error message', () => {
        const formErrors = { username: 'Invalid username' }

        render(
            <Modal formErrors={formErrors} />
        );

        expect(screen.getByText(/Invalid username/i)).toBeInTheDocument();
    });

    test('show email validation error message', () => {
        const formErrors = { email: 'Invalid email' }

        render(
            <Modal formErrors={formErrors} />
        );

        expect(screen.getByText(/Invalid email/i)).toBeInTheDocument();
    });

    test('show message validation error', () => {
        const formErrors = { message: 'Invalid message' }

        render(
            <Modal formErrors={formErrors} />
        );

        expect(screen.getByText(/Invalid message/i)).toBeInTheDocument();
    });
});