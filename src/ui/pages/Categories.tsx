import { useState } from "react"
import { useCategoriesQuery } from "../../api/queries/categories.query"
import { useCategoriesMutations } from "../../api/mutations/categories.mutation"
import { CategoriesList } from "../components"

export const Categories = () => {
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
        <div className="flex flex-col items-center">
            <div className="flex flex-col  gap-2">
                <div className="flex flex-col justify-start gap-2">
                    <label htmlFor="add-category" data-testid="add-category-title" className="font-bold text-blue-400 text-start">Add Category</label>
                    <input
                        className="border border-gray-900 rounded-sm my-2"
                        id="add-category"
                        type="text"
                        value={newCategory}
                        onChange={event => setNewCategory(event.target.value)}
                    />
                </div>
                <button
                    className="border border-gray-900 rounded-sm my-2 bg-blue-400 text-white px-5 max-w-[287px]"
                    type="button" onClick={handleAddCategory}>
                    Add Category
                </button>
            </div>

            <h1 className="font-bold text-xl  text-blue-700" data-testid="categories-title">Categories</h1>

            {getCategoriesQuery.isSuccess && <CategoriesList categories={getCategoriesQuery.data} />}

            {getCategoriesQuery.isPending && <span data-testid="loading">Loading</span>}

        </div >
    )
}
