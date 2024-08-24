import '@testing-library/jest-dom/vitest';
import { afterAll, beforeAll } from 'vitest';
import { setupServer } from 'msw/node';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
// runs a clean after each test case (e.g. clearing jsdom)

export const server = setupServer();

beforeAll(() => server.listen());

// Para o servidor MSW após todos os testes
afterAll(() => server.close());

afterEach(() => {
  server.resetHandlers()
  cleanup();
})