import { render } from 'test-utils';
import React from 'react';
import App from '../App/App';

test('renders lern test', () => {
    const { getByText } = render(<App />)
    const text = getByText(/hello world!/i)
    expect(text).toBeImTheDocument();
})
