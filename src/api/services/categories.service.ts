import axios from "axios"
import { instance } from "../http"

export interface Category {
    id: string
    description: string
}
export const listCategories = async () : Promise<Category[]> => {
    return (await instance.get('categories')).data
}

export const createCategory = async (description: string) : Promise<void> => {
    return (await axios.post('categories', { description }))
}
