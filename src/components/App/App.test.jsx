import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App', () => {
  it('render App', () => {
    render(<App />);
    expect(screen.getByText(/hello world!/i)).toBeInTheDocument();
  });
});

describe('events', () => {
  it('checkbox click', () => {
    render(<App />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
    expect(screen.getByText(/Good Morgin/i)).toBeInTheDocument();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(screen.getByText(/Good Night/i)).toBeInTheDocument();
  });
});

describe('change theme', () => {
  it('change background colors', () => {
    render(<App />);
    const container = screen.getByRole('main');
    const checkbox = screen.getByRole('checkbox');
    expect(container.classList.contains('theme__light')).toBe(true);
    fireEvent.click(checkbox);
    expect(container.classList.contains('theme__light')).toBe(true);
  });
});
