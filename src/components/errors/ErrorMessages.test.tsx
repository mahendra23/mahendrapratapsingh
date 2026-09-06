import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorMessages } from './ErrorMessages';

describe('ErrorMessages Component', () => {
  test('renders error messages', () => {
    const errors = ['Error 1', 'Error 2', 'Error 3'];
    render(<ErrorMessages errorMessages={errors} />);
    
    errors.forEach(error => {
      expect(screen.getByText(`Error: ${error}`)).toBeInTheDocument();
    });
  });

  test('renders empty when no errors', () => {
    const { container } = render(<ErrorMessages errorMessages={[]} />);
    expect(container.firstChild?.childNodes.length).toBe(0);
  });

  test('renders multiple error messages with correct structure', () => {
    const errors = ['First error', 'Second error'];
    const { container } = render(<ErrorMessages errorMessages={errors} />);
    
    const errorDivs = container.querySelectorAll('.errorMessages > div');
    expect(errorDivs.length).toBe(2);
  });

  test('adds error prefix to each message', () => {
    const errors = ['Invalid input', 'Missing field'];
    render(<ErrorMessages errorMessages={errors} />);
    
    expect(screen.getByText('Error: Invalid input')).toBeInTheDocument();
    expect(screen.getByText('Error: Missing field')).toBeInTheDocument();
  });
});
