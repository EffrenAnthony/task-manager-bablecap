import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ComponentModel from './ComponentModel';

describe('ComponentModel', () => {
  it('Render Task Manager', () =>{
    // ARRANGE
    render(<ComponentModel/>)
    // ACT
    // (click a button, run a function etc)
    // EXPECT
    expect(screen.getByRole('c-model-container')).toHaveTextContent('ComponentModelTest')
  })
})
