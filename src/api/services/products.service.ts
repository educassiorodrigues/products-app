import { Product } from "../../core/interfaces/responses"
import { instance } from "../http"

export const listProducts = async () : Promise<Product[]> => {
    return (await instance.get('products')).data
} 

export const getProductById = async (id: string) : Promise<Product[]> => {
    return (await instance.get(`products/${id}`)).data
}
