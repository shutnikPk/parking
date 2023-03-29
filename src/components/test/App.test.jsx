import { render } from "@testing-library/react";
import React from 'react';
import App from './../App/App.jsx'
test('renders-lern-test', () => {
    const { getByText } = render(<App />)
    const text = getByText(/hello world!/i)
    expect(text).toBeInTheDocument();

})
