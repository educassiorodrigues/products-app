import { useMutation } from "@tanstack/react-query"
import { createCategory } from "../services"
import { useCategoriesQuery } from "../queries/categories.query"

export const useCategoriesMutations = () => {
    const { getCategoriesQuery } = useCategoriesQuery()
    
    const createCategoryMutation = useMutation({
        mutationFn: createCategory,
        onSuccess: () => {
            getCategoriesQuery.refetch()
        },
    })

    return {
        createCategoryMutation
    }
}