import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"


const NavLink = (props: { to: string, text:string }) => {
    return (
        <Nav.Link>
            <Link to={props.to}>{props.text}</Link>
        </Nav.Link>
    )
}

export const Menu = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="/">Produtos</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav>
                        <NavLink to="/" text="Home"/>
                        <NavLink to="/products" text="Produtos"/>
                        <NavLink to="/categories" text="Categorias"/>
                    </Nav>
                </Navbar.Collapse>
            
            </Container>
        </Navbar>
    )
}