import { afterEach, expect, test, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import WaitlistForm from './WaitlistForm';
import { WAITLIST_API } from '../lib/constants';

afterEach(() => { cleanup(); vi.unstubAllGlobals(); });

const render_form = () => render(<MemoryRouter><WaitlistForm /></MemoryRouter>);

const fill = () => {
  fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: 'Ana' } });
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'ana@example.com' } });
  fireEvent.click(screen.getByRole('checkbox'));
  fireEvent.submit(screen.getByRole('button', { name: /apuntarme/i }).closest('form')!);
};

test('consent is required', () => {
  render_form();
  expect((screen.getByRole('checkbox') as HTMLInputElement).required).toBe(true);
});

test('posts the signup and confirms', async () => {
  const fetch_mock = vi.fn().mockResolvedValue({ ok: true });
  vi.stubGlobal('fetch', fetch_mock);
  render_form();
  fill();
  expect(await screen.findByRole('status')).toBeTruthy();
  const [url, init] = fetch_mock.mock.calls[0];
  expect(url).toBe(WAITLIST_API);
  expect(JSON.parse(init.body)).toEqual({ name: 'Ana', email: 'ana@example.com', consent: true });
});

test('shows an error when the server rejects', async () => {
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }));
  render_form();
  fill();
  expect(await screen.findByRole('alert')).toBeTruthy();
});
