import { render, screen } from "@testing-library/react";
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import HomePage from "../components/HomePage";


it("Home page snapshot", async() => {

    const { container } = render(<>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </>);

    await expect(container).toMatchSnapshot();
})