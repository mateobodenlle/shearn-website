import { afterEach, expect, test, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Waitlist from './Waitlist';
import { LINKS } from '../lib/constants';

afterEach(() => { cleanup(); vi.unstubAllGlobals(); });

const fill = () => {
  fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: 'Ana' } });
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'ana@example.com' } });
  fireEvent.click(screen.getByRole('checkbox'));
  fireEvent.submit(screen.getByRole('button', { name: /apuntarme/i }).closest('form')!);
};

test('shows price and conditions', () => {
  render(<Waitlist />);
  expect(screen.getByText('89 €')).toBeTruthy();
  expect(screen.getByText(/30 €\/mes/)).toBeTruthy();
  expect(screen.getByText(/no te compromete/)).toBeTruthy();
  expect(screen.getByText(/una semana a toda España/)).toBeTruthy();
});

test('consent is required', () => {
  render(<Waitlist />);
  expect((screen.getByRole('checkbox') as HTMLInputElement).required).toBe(true);
});

test('posts the signup and confirms', async () => {
  const fetchMock = vi.fn().mockResolvedValue({ ok: true });
  vi.stubGlobal('fetch', fetchMock);
  render(<Waitlist />);
  fill();
  expect(await screen.findByText('¡Estás dentro!')).toBeTruthy();
  const [url, init] = fetchMock.mock.calls[0];
  expect(url).toBe(LINKS.waitlistApi);
  expect(JSON.parse(init.body)).toEqual({ name: 'Ana', email: 'ana@example.com', consent: true });
});

test('shows an error when the server rejects', async () => {
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }));
  render(<Waitlist />);
  fill();
  expect(await screen.findByRole('alert')).toBeTruthy();
});
