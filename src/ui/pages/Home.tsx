import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div className="">
            <h1>Home</h1>

            <Link to={'/categories'}>Categories</Link>
            <Link to={'/products'}>Products</Link>
        </div>

    )
}
