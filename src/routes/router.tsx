import { createBrowserRouter } from "react-router-dom";
import { Categories, Home, Products} from "../ui/pages";
import { App } from "../App";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/categories",
                element: <Categories />,
            },
            
            {
                path: "/products",
                element: <Products />,
            },
        ]
    },
    {
        path: "*",
        element: <h1>404</h1>,
    }
]);
