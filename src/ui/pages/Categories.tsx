import { useState } from "react"
import { useCategoriesQuery } from "../../api/queries/categories.query"
import { useCategoriesMutations } from "../../api/mutations/categories.mutation"

export const Category = () => {
    const [newCategory, setNewCategory] = useState<string>('')
    
    const { createCategoryMutation } = useCategoriesMutations()
    const { getCategoriesQuery } = useCategoriesQuery()

    if (getCategoriesQuery.isError) {
        return getCategoriesQuery.error.toString();
    }

    const handleAddCategory = () => {
        createCategoryMutation.mutate(newCategory);
        setNewCategory('');
    }

    return (
        <div>
            <h1>Add Category</h1>
            <input type="text" value={newCategory} onChange={event => setNewCategory(event.target.value)} />
            <button type="button" onClick={handleAddCategory}>Add Category</button>

            <h1>Categories</h1>
            <ul>
                {getCategoriesQuery.isSuccess && getCategoriesQuery.data.map((category) => (
                    <li key={category.id}>{category.description}</li>
                ))}

                {getCategoriesQuery.isSuccess && getCategoriesQuery.data.length === 0 && <h1>No categories</h1>}
                {getCategoriesQuery.isPending && <h1>Loading</h1>}
            </ul>
        </div>
    )
}
