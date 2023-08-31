import { render, screen } from "@testing-library/react";

import { Toolbox } from "./Toolbox";

describe('Testing the Home Component', () => {
    test('shows children', () => {
        render(<Toolbox />);

        expect(screen.getByText(/HTML5/i)).toBeInTheDocument();
        expect(screen.getByText(/React/i)).toBeInTheDocument();
        expect(screen.getByText(/RESTful APIs/i)).toBeInTheDocument();
        expect(screen.getByText(/Redux Toolkit/i)).toBeInTheDocument();
    });
});