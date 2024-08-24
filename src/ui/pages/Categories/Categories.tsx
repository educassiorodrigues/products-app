import { useState } from "react"
import { useCategoriesMutations } from "../../../api/mutations/categories.mutation"
import { useCategoriesQuery } from "../../../api/queries/categories.query"
import { CategoriesList } from "../../components"
import { InputGroup } from "../../components/shared/InputGroupComposition/InputGroup"

export const Categories = () => {
    const [newCategory, setNewCategory] = useState<string>('')

    const { createCategoryMutation } = useCategoriesMutations()
    const { getCategoriesQuery } = useCategoriesQuery()

    if (getCategoriesQuery.isError) {
        return getCategoriesQuery.error.toString();
    }

    const handleAddCategory = () => {
        createCategoryMutation.mutate(newCategory, {
            onSuccess: () => {
                setNewCategory('');
            }
        });
    }

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col  gap-2">
                <InputGroup.Root>
                    <InputGroup.Label label="Add Category" data-testid="add-category-title" />
                    <InputGroup.InputText id="add-category" onChange={event => setNewCategory(event.target.value)} value={newCategory} />
                </InputGroup.Root>

                <button
                    className="border border-gray-900 rounded-sm bg-blue-400 text-white px-5 max-w-[287px]"
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
