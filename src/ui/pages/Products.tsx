import { useProductsQuery } from "../../api/queries/products.query"

export const Products = () => {
    const { getProductsQuery } = useProductsQuery()
    return (
        <div>
            <h1>Products</h1>
            {getProductsQuery.isLoading && <p>Loading...</p>}
            {getProductsQuery.isError && <p>Error</p>}
            {getProductsQuery.isSuccess && (
                <ul>
                    {getProductsQuery.data?.map((product) => (
                        <li key={product.id}>{product.id} - {product.description} </li>
                    ))}
                </ul>
            )}
        </div>
    )
}