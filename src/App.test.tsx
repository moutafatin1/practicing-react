import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('Renders hello world', () => {
    // Arrange
    render(<App />);
    // Act
    // Expect
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Hello World');
  });
});
