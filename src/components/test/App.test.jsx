import { render, screen } from "@testing-library/react";
import React from 'react';
import App from './../App/App.jsx'

// test('renders-lern-test', () => {
//     const { getByText } = render(<App />)
//     const text = getByText(/hello world!/i)
//     expect(text).toBeInTheDocument();

// })

describe('App', () => {
    it("first test", () => {
        render(<App />)
        screen.debug()
        expect(screen.getByText(/hello world!/i)).toBeInTheDocument()
    })
})
