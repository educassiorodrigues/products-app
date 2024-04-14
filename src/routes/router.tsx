import { createBrowserRouter } from "react-router-dom";
import { Category, Home, Products} from "../ui/pages";
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
                element: <Category />,
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
