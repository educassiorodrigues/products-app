import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Categories } from './Categories'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

describe('Categories', () => {
    it('Given  categories when render then show h1', () => {
        const queryClient = new QueryClient()

        render(
        <QueryClientProvider client={queryClient}>
            <Categories />
        </QueryClientProvider>)
        const h1 = screen.getByTestId('h1');
        expect(h1).toBeDefined();
    })
})

