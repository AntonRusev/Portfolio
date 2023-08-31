import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { Nfts } from "./Nfts";

describe('Testing the Nfts component', () => {
    test('shows name of the project', () => {
        render(
            <BrowserRouter>
                <Nfts />
            </BrowserRouter>
        );

        const headingText = (screen.getByRole('heading', { level: 1 })).textContent;
        expect(headingText).toBe("NFTs Gallery");
    });

    test('shows the images', () => {
        render(
            <BrowserRouter>
                <Nfts />
            </BrowserRouter>
        );

        const [imgOne, imgTwo] = screen.getAllByRole('img');

        expect(imgOne).toHaveAttribute('src', 'https://i.ibb.co/k8HVYDr/nft-create-mobile.png');
        expect(imgTwo).toHaveAttribute('src', 'https://i.ibb.co/xqb8y1f/nft-home-full.png');
    });

    test('has proper links', () => {
        render(
            <BrowserRouter>
                <Nfts />
            </BrowserRouter>
        );

        const [deployedLink, repoLink, backBtn] = screen.getAllByRole('link');

        expect(deployedLink).toHaveAttribute('href', 'https://nfts-gallery.web.app/');
        expect(repoLink).toHaveAttribute('href', 'https://github.com/AntonRusev/React-NFTs');
        expect(backBtn).toHaveAttribute('href', '/#my-projects');
    });

    test('Back button works properly', () => {
        render(
            <BrowserRouter>
                <Nfts />
            </BrowserRouter>
        );

        const backBtn = screen.getByRole('link', { name: /back/i })
        fireEvent.click(backBtn);

        const currentUrlHash =  global.window.location.hash;
        expect(currentUrlHash).toContain(`#my-projects`);
    });
});