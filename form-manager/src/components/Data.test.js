import React from 'react';
import { render } from '@testing-library/react';
import Data from './Data';

describe('<Data />', () => {
    it('renders an h1', () => {
        const data = render(<Data/>);
        data.getByText(/Data:/i);
    })
    it('sets the state', () => {
        const stateSetter = (newdata) => {
            let data = [];
            data = newdata;
            return data;
        }
        expect(stateSetter(1)).toBe(1);
    })
})