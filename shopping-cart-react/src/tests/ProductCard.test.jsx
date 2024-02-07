import { render, screen } from "@testing-library/react";
import { describe, it, expect } from 'vitest';
import userEvent from "@testing-library/user-event";
import ProductCard from "../components/ProductCard";


describe("Product card", () => {
    const mockData = { id: 1, title: 'Test Product', price: 20.99, image: 'image.jpg' };

    it("Renders product card", async() => {

        render(<>
            <ProductCard id={mockData.id} title={mockData.title} image={mockData.image} price={mockData.price}/>
        </>);

        expect(screen.getByText('Test Product')).toBeInTheDocument();
        expect(screen.getByText('20.99$')).toBeInTheDocument();
    })
})
