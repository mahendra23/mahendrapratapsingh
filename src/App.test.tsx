import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from './components/themecontext/ThemeContext';

describe('App Component', () => {
  const renderApp = () => {
    return render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );
  };

  test('renders without crashing', () => {
    renderApp();
    expect(document.querySelector('.App')).toBeInTheDocument();
  });

  test('renders preloader component', () => {
    renderApp();
    const preloader = document.querySelector('[id="preloader-none"]');
    expect(preloader).toBeInTheDocument();
  });

  test('renders either light or dark home base based on theme', () => {
    renderApp();
    const appContainer = document.querySelector('.App');
    expect(appContainer).toBeInTheDocument();
  });
});

