import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CategoriesList } from './CategoriesList'
import { Category } from '../../../api/services';
import '@testing-library/jest-dom'

describe('Categories List Component', () => {
    it('Given  categories when render then show categories list', () => {
        //arrange
        render(<CategoriesList categories={[]} />)

        //act
        const ul = screen.getByTestId('list-group');

        //asserts
        expect(ul).toBeDefined();
    })

    it('Given 3 categories when render then show 3 itens', () => {
        //arrange
        const categories: Category[] = [
            { id: '1', description: 'Category 1' },
            { id: '2', description: 'Category 2' },
            { id: '3', description: 'Category 3' },
        ]

        render(<CategoriesList categories={categories} />)

        //act
        const item = screen.getAllByTestId('list-group-item');

        //asserts
        expect(item).toHaveLength(3);
    })

    it('Given 3 categories when render then show description from props', () => {
        //arrange
        const categories: Category[] = [
            { id: '1', description: 'Category 1' },
            { id: '2', description: 'Category 2' },
            { id: '3', description: 'Category 3' },
        ]

        render(<CategoriesList categories={categories} />)

        //act
        const item = screen.getAllByTestId('list-group-item');

        //asserts
        expect(item[0]).toHaveTextContent('Category 1');
        expect(item[1]).toHaveTextContent('Category 2');
        expect(item[2]).toHaveTextContent('Category 3');
    })

    it('Given no one categories when render then show item with message "Nenhuma categoria cadastrada."', () => {
        //arrange
        render(<CategoriesList categories={[]} />)

        //act
        const item = screen.getByTestId('no-items');

        //asserts
        expect(item).toHaveTextContent('Nenhuma categoria cadastrada.');
        expect(item).toBeInTheDocument();
    })
})
