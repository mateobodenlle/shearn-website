import { afterEach, expect, test } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import CookieBanner from './CookieBanner';

afterEach(() => { cleanup(); localStorage.clear(); });

test.each(['Aceptar', 'Rechazar'])('%s hides the banner and remembers it', (label) => {
  render(<CookieBanner />);
  fireEvent.click(screen.getByText(label));
  expect(screen.queryByRole('dialog')).toBeNull();
  cleanup();
  render(<CookieBanner />);
  expect(screen.queryByRole('dialog')).toBeNull();
});

test('shows until a choice is made', () => {
  render(<CookieBanner />);
  expect(screen.getByRole('dialog')).toBeTruthy();
});
