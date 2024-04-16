import { useQuery } from "@tanstack/react-query";
import { listCategories } from "../services";

export const useCategoriesQuery = () => {
    const getCategoriesQuery = useQuery({ queryKey: ['list-categories'], queryFn: listCategories })
    
    return {
        getCategoriesQuery
    }
}
