import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, useTheme } from './ThemeContext';

// Test component that uses the theme hook
const TestComponent = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <div>
      <div data-testid="theme-status">{isDark ? 'dark' : 'light'}</div>
      <button onClick={toggleTheme} data-testid="toggle-button">
        Toggle Theme
      </button>
    </div>
  );
};

describe('ThemeContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('throws error when useTheme is used outside ThemeProvider', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();
    
    expect(() => {
      render(<TestComponent />);
    }).toThrow('useTheme must be used within a ThemeProvider');
    
    consoleError.mockRestore();
  });

  test('provides default theme value from constants', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    
    const themeStatus = screen.getByTestId('theme-status');
    expect(themeStatus).toBeInTheDocument();
  });

  test('toggles theme when toggleTheme is called', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    
    const toggleButton = screen.getByTestId('toggle-button');
    const themeStatus = screen.getByTestId('theme-status');
    
    const initialTheme = themeStatus.textContent;
    fireEvent.click(toggleButton);
    
    const newTheme = themeStatus.textContent;
    expect(initialTheme).not.toBe(newTheme);
  });

  test('persists theme preference to localStorage', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    
    const toggleButton = screen.getByTestId('toggle-button');
    fireEvent.click(toggleButton);
    
    const storedTheme = localStorage.getItem('app-theme-preference');
    expect(storedTheme).toBeTruthy();
  });

  test('restores theme from localStorage on mount', () => {
    localStorage.setItem('app-theme-preference', JSON.stringify(false));
    
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    
    const themeStatus = screen.getByTestId('theme-status');
    expect(themeStatus.textContent).toBe('light');
  });
});
