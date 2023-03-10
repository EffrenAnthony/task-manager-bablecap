import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Render Task Manager', () =>{
    // ARRANGE
    render(<App/>)
    // ACT
    // (click a button, run a function etc)
    // EXPECT
    expect(screen.getByRole('heading', {
      level: 1
    })).toHaveTextContent('Task Manager')
  })
})
