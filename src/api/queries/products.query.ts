import { UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"
import { Product } from "../../core/interfaces/responses"
import { listProducts } from "../services/products.service"

export interface IUseProductsQuery {
    getProductsQuery: UseQueryResult<Product[], Error>
    getProductByIdQuery: (id: string) => UseQueryOptions<Product[], Error, Product[], string[]>
}

export const useProductsQuery = () => {
    const getProductsQuery = useQuery({ queryKey: ['list-products'], queryFn: listProducts })

    return {
        getProductsQuery,
    }
}