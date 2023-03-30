import { render, screen } from "@testing-library/react";
import React from 'react';
import App from './../App/App.jsx'

describe('App', () => {
    it("first test", () => {
        render(<App />)
        screen.debug()
        expect(screen.getByText(/hello world!/i)).toBeInTheDocument()
    })
})
