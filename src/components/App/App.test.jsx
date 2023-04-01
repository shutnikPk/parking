import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import App from './App.jsx'

describe('App', () => {
    it('render App', () => {
        render(<App />)
        expect(screen.getByText(/hello world!/i)).toBeInTheDocument()
    })
})

describe('events', () => {
    it('checkbox click', () => {
        const handleChange = jest.fn()
        render(<App />)
        const checkbox = screen.getByRole('checkbox')
        expect(checkbox).toBeChecked()
        expect(screen.getByText(/Good Morgin/i)).toBeInTheDocument()
        fireEvent.click(checkbox)
        expect(handleChange).not.toBeCalled()
        expect(screen.getByText(/Good Night/i)).toBeInTheDocument()
    })
})
