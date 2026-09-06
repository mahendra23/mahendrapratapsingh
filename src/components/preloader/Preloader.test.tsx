import React from 'react';
import { render } from '@testing-library/react';
import { Preloader } from './Preloader';

describe('Preloader Component', () => {
  test('renders preloader when load is true', () => {
    const { container } = render(<Preloader load={true} />);
    const preloader = container.querySelector('#preloader');
    expect(preloader).toBeInTheDocument();
    expect(preloader?.className).toContain('Preloader');
  });

  test('renders preloader-none when load is false', () => {
    const { container } = render(<Preloader load={false} />);
    const preloader = container.querySelector('#preloader-none');
    expect(preloader).toBeInTheDocument();
    expect(preloader?.className).toContain('Preloader-none');
  });

  test('renders logo image with proper alt text', () => {
    const { container } = render(<Preloader load={true} />);
    const img = container.querySelector('.Preloader-img') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.alt).toBe('Loading...');
  });

  test('toggles between preloader and preloader-none based on load prop', () => {
    const { container, rerender } = render(<Preloader load={true} />);
    expect(container.querySelector('#preloader')).toBeInTheDocument();
    
    rerender(<Preloader load={false} />);
    expect(container.querySelector('#preloader-none')).toBeInTheDocument();
  });
});
