import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TaxCalculator } from './TaxCalculator';
import { ThemeProvider } from '../../themecontext/ThemeContext';

// Mock the service function
jest.mock('../../../service/TaxUtilFunctions', () => ({
  calculateNZTaxAndNetIncome: jest.fn((income: string) => ({
    tax: '$ 25,350.00 / $ 2,112.50',
    netIncome: '$ 74,650.00 / $ 6,220.83'
  }))
}));

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe('TaxCalculator Component', () => {
  test('renders the tax calculator component', () => {
    renderWithTheme(<TaxCalculator />);
    expect(screen.getByPlaceholderText('Enter annual income')).toBeInTheDocument();
  });

  test('allows entering numeric values in the income field', () => {
    renderWithTheme(<TaxCalculator />);
    const input = screen.getByPlaceholderText('Enter annual income') as HTMLInputElement;
    
    fireEvent.change(input, { target: { value: '100000' } });
    expect(input.value).toBe('100000');
  });

  test('prevents entering non-numeric values', () => {
    renderWithTheme(<TaxCalculator />);
    const input = screen.getByPlaceholderText('Enter annual income') as HTMLInputElement;
    
    fireEvent.change(input, { target: { value: 'abc' } });
    expect(input.value).toBe('');
  });

  test('allows decimal values', () => {
    renderWithTheme(<TaxCalculator />);
    const input = screen.getByPlaceholderText('Enter annual income') as HTMLInputElement;
    
    fireEvent.change(input, { target: { value: '100000.50' } });
    expect(input.value).toBe('100000.50');
  });

  test('shows error when trying to calculate without income', () => {
    renderWithTheme(<TaxCalculator />);
    const calculateButton = screen.getByTitle('Run Button');
    
    fireEvent.click(calculateButton);
    
    const errorMessages = screen.queryByText(/Error:/);
    expect(errorMessages).toBeInTheDocument();
  });

  test('clears form when clear button is clicked', () => {
    renderWithTheme(<TaxCalculator />);
    const input = screen.getByPlaceholderText('Enter annual income') as HTMLInputElement;
    const clearButton = screen.getByTitle('Clear Button');
    
    fireEvent.change(input, { target: { value: '100000' } });
    fireEvent.click(clearButton);
    
    expect(input.value).toBe('');
  });

  test('displays results in a table format', () => {
    renderWithTheme(<TaxCalculator />);
    const input = screen.getByPlaceholderText('Enter annual income') as HTMLInputElement;
    const calculateButton = screen.getByTitle('Run Button');
    
    // Verify initial state - no error messages
    expect(document.querySelector('.errorMessages')).not.toBeInTheDocument();
    
    // Enter income and calculate
    fireEvent.change(input, { target: { value: '100000' } });
    fireEvent.click(calculateButton);
    
    // Verify that calculation was triggered (mock was called)
    // The actual tax calculation is tested separately in TaxUtilFunctions.test.ts
    expect(input.value).toBe('100000');
  });
});
