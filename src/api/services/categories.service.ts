import axios from "axios"

interface Category {
    id: string
    description: string
}

export const listCategories = async () : Promise<Category[]> => {
    return (await axios.get('https://localhost:8080/categories')).data
}

export const createCategory = async (description: string) : Promise<void> => {
    return (await axios.post('https://localhost:8080/categories', { description }))
}
