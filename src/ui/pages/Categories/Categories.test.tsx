import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, renderHook, screen, waitFor } from '@testing-library/react';
import { ReactNode } from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { server } from '../../../../tests/setup';
import { useCategoriesQuery } from '../../../api/queries/categories.query';
import { Categories } from './Categories';
import { handleEmptyResponseMock, handleNotEmptyResponseMock } from './Categories.tests.mock';

import '@testing-library/jest-dom';

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
        server.use(handleNotEmptyResponseMock)

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
        server.use(handleEmptyResponseMock)

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
