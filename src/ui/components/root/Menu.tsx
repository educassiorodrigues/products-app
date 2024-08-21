import { Link } from "react-router-dom"


const Item = (props: { to: string, text:string }) => {
    return (
        <li className="text-blue-400 hover:text-opacity-80">
            <Link to={props.to}>{props.text}</Link>
        </li>
    )
}

export const Menu = () => {
    return (
        <ul className="flex gap-2 font-bold ">
            <Item to="/" text="Home"/>
            <Item to="/products" text="Produtos"/>
            <Item to="/categories" text="Categorias"/>
        </ul>
    )
}