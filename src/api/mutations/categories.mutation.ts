import { useMutation, UseMutationResult } from "@tanstack/react-query"
import { createCategory, deleteCategory } from "../services"
import { useCategoriesQuery } from "../queries/categories.query"

interface CategoriesMutations {
    createCategoryMutation:  UseMutationResult<void, Error, string, unknown>
    deleteCategoryMutation:  UseMutationResult<void, Error, string, unknown>
}

export const useCategoriesMutations = () : CategoriesMutations => {
    const { getCategoriesQuery } = useCategoriesQuery()
    
    const createCategoryMutation = useMutation({
        mutationFn: createCategory,
        onSuccess: () => {
            getCategoriesQuery.refetch()
        },
    })

    const deleteCategoryMutation = useMutation({
        mutationFn: deleteCategory,
        onSuccess: () => {
            getCategoriesQuery.refetch()
        },
    })



    return {
        createCategoryMutation,
        deleteCategoryMutation
    }
}