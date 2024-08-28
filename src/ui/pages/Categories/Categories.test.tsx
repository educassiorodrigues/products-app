import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, renderHook, screen, waitFor } from '@testing-library/react';
import { ReactNode } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { server } from '../../../../tests/setup';
import { useCategoriesQuery } from '../../../api/queries/categories.query';

import { handleCreateNewCategoryMock, handleEmptyResponseMock, handleNotEmptyResponseMock } from './Categories.test.mock';

import '@testing-library/jest-dom';
import { Categories } from './Categories';

const createWrapper = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false
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

        const emptyResponseSpy = vi.spyOn(handleNotEmptyResponseMock, 'run')
        //act

        render(
            <Wrapper>
                <Categories />
            </Wrapper>
        )

        const ul = screen.getByTestId('list-group');

        //asserts
        expect(ul).toBeDefined();
        expect(emptyResponseSpy).toBeCalledTimes(1)
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
        const ul = screen.getByTestId('list-group');
        const liWithoutItems = screen.getByTestId('no-items');
        //asserts
        expect(ul).toBeDefined();
        expect(liWithoutItems).toBeDefined();

    })

    it('Given new Category when Add then refetch list categories', async () => {
        server.use(handleNotEmptyResponseMock)
        server.use(handleCreateNewCategoryMock)

        const categoriesQuery = renderHook(() => useCategoriesQuery(), { wrapper: Wrapper })
        // const categoriesMutation = renderHook(() => useCategoriesMutations(), { wrapper: Wrapper })

        await waitFor(() => expect(categoriesQuery.result.current.getCategoriesQuery.status === 'success').toBe(true))

        render(
            <Wrapper>
                <Categories />
            </Wrapper>
        )

        const handleCreateCategorySpy = vi.spyOn(handleCreateNewCategoryMock, 'run')
        const handleNotEmptyResponseMockSpy = vi.spyOn(handleNotEmptyResponseMock, 'run')

        screen.getByPlaceholderText('Nova categoria').nodeValue = "Nova Categoria";
        //act
        screen.getByText('Adicionar Categoria', { selector: 'button'}).click()
       
        await waitFor(() => expect(categoriesQuery.result.current.getCategoriesQuery.status === 'success').toBe(true))
        //asserts
        expect(handleCreateCategorySpy).toBeCalledTimes(2)
        expect(handleNotEmptyResponseMockSpy).toBeCalledTimes(2)
    })
})
