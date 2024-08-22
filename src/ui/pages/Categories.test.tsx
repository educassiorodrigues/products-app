import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { render, renderHook, screen, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { ReactNode } from 'react';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { useCategoriesQuery } from '../../api/queries/categories.query';
import { Categories } from './Categories';

import '@testing-library/jest-dom';

const server = setupServer();


beforeAll(() => server.listen());

// Limpa os handlers após cada teste
afterEach(() => server.resetHandlers());

// Para o servidor MSW após todos os testes
afterAll(() => server.close());

const createWrapper = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    })

    return ({ children }: { children: ReactNode }) => (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

const Wrapper = createWrapper()

beforeEach(() => {

})

describe('Categories Page', async () => {
    it('Given categories when fetched categories then show categories list', async () => {
        //arrange
        server.use(http.get(`${import.meta.env.VITE_API_URL}/categories`, () => {
            // ...and respond to them using this JSON response.
            return HttpResponse.json([
                {
                    "description": "Limpeza",
                    "id": "ec3cc06f-791c-42a2-a8e4-48e25d623935"
                },
                {
                    "description": "string",
                    "id": "abc72484-1978-488a-a533-75099cdbe430"
                }]
            )
        }))

        const { result } = renderHook(() => useCategoriesQuery(), { wrapper: Wrapper })

        await waitFor(() => expect(result.current.getCategoriesQuery.status === 'success').toBe(true))

        render(
            <Wrapper>
                <Categories />
            </Wrapper>
        )

        //act
        const ul = screen.getByTestId('categories-list');

        //asserts
        expect(ul).toBeDefined();
    })

    it('Given fetched categories when categories is empty then show categories list with list item with no categories list', async () => {
        server.use(http.get(`${import.meta.env.VITE_API_URL}/categories`, () => {
            return HttpResponse.json([])
        }))

        const { result } = renderHook(() => useCategoriesQuery(), { wrapper: Wrapper })

        await waitFor(() => expect(result.current.getCategoriesQuery.status === 'success').toBe(true))

        render(
            <Wrapper>
                <Categories />
            </Wrapper>
        )

        //act
        const ul = screen.getByTestId('categories-list');
        const liWithoutItems = screen.getByTestId('categories-no-categories');
        //asserts
        expect(ul).toBeDefined();
        expect(liWithoutItems).toBeDefined();
    })
})
