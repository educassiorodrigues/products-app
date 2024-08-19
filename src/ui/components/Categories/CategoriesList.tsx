import { Category } from "../../../api/services"

interface CategoriesListProps {
    categories: Category[]
}
export const CategoriesList = (props: CategoriesListProps) => {
    return (
        <ul className="text-start" data-testid="categories-list">
            {props.categories.map((category) => (
                <li key={category.id} data-testid="category-list-item">-{category.description}</li>
            ))}

            {props.categories.length === 0 && <li data-testid="categories-no-categories">No categories</li>}
        </ul>
    )
}