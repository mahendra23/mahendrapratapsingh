import React from 'react';
import { render, screen } from '@testing-library/react';
import CareerOverviewComponent from '../CareerOverviewComponent';

describe("TACertComponent", () => {
    test('renders learn react link', () => {
        render(<CareerOverviewComponent />);
        const linkElement = screen.getByTestId("career-details");
        expect(linkElement).toBeInTheDocument();
      });
});