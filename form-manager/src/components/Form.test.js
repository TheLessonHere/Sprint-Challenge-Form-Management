import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './Form';

describe('<Form />', () => {
    it('button fires an event', () => {
        const form = render(<Form/>);
        const submitbutton = form.getByText(/submit/i);
        fireEvent.click(submitbutton);
    })
})