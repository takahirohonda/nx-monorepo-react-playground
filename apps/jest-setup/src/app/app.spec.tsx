import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import App from './app';

// import '@testing-library/jest-dom' -> using setupTest.ts so that we don't need to import this in every spec file.
describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText(/Welcome jest-setup/i)).toBeTruthy();
    expect(screen.getByText('for jest test')).toBeVisible()
  });
});