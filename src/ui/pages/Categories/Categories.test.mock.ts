import { http, HttpResponse } from "msw"

export const handleNotEmptyResponseMock = http.get(`${import.meta.env.VITE_API_URL}/categories`, () => {
    return HttpResponse.json([
        {
            "description": "Limpeza",
            "id": "ec3cc06f-791c-42a2-a8e4-48e25d623935"
        },
        {
            "description": "string",
            "id": "abc72484-1978-488a-a533-75099cdbe430"
        }]
    )
})

export const handleEmptyResponseMock = http.get(`${import.meta.env.VITE_API_URL}/categories`, () => {
    return HttpResponse.json([])
})

export const handleCreateNewCategoryMock = http.post(`${import.meta.env.VITE_API_URL}/categories`, () => {
    return HttpResponse.json(null, {status: 201})
})