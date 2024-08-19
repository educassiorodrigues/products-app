import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CategoriesList } from './CategoriesList'
import { Category } from '../../../api/services';
import '@testing-library/jest-dom'

describe('Categories', () => {
    it('Given  categories when render then show categories list', () => {


        render(<CategoriesList categories={[]} />)
        const ul = screen.getByTestId('categories-list');
        expect(ul).toBeDefined();
    })

    it('Given 3 categories when render then show 3 itens', () => {
        const categories: Category[] = [
            { id: '1', description: 'Category 1' },
            { id: '2', description: 'Category 2' },
            { id: '3', description: 'Category 3' },
        ]
        render(<CategoriesList categories={categories} />)

        const item = screen.getAllByTestId('category-list-item');

        expect(item).toHaveLength(3);
    })

    it('Given 3 categories when render then show description from props', () => {
        const categories: Category[] = [
            { id: '1', description: 'Category 1' },
            { id: '2', description: 'Category 2' },
            { id: '3', description: 'Category 3' },
        ]
        render(<CategoriesList categories={categories} />)

        const item = screen.getAllByTestId('category-list-item');

        expect(item[0]).toHaveTextContent('Category 1');
        expect(item[1]).toHaveTextContent('Category 2');
        expect(item[2]).toHaveTextContent('Category 3');
    })

    it('Given no one categories when render then not show item with message "no categories"', () => {
        render(<CategoriesList categories={[]} />)

        const item = screen.getByTestId('categories-no-categories');

        expect(item).toHaveTextContent('No categories');
        expect(item).toBeInTheDocument();
    })
})

