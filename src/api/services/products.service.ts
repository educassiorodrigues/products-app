import axios from "axios"
import { Product } from "../../core/interfaces/responses"

export const listProducts = async () : Promise<Product[]> => {
    return (await axios.get('https://localhost:8080/products')).data
} 

export const getProductById = async (id: string) : Promise<Product[]> => {
    return (await axios.get(`https://localhost:8080/products/${id}`)).data
} 