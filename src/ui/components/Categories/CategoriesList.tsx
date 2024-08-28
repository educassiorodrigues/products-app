import { ListGroup } from "react-bootstrap"
import { Category } from "../../../api/services"

interface CategoriesListProps {
    categories: Category[]
}
export const CategoriesList = (props: CategoriesListProps) => {
    return (
        <ListGroup data-testid="list-group">
            {props.categories.map((category, index) => (
                  <ListGroup.Item key={category.id} data-testid="list-group-item">{index}: {category.description}</ListGroup.Item>
             ))}

             {props.categories.length === 0 && <ListGroup.Item data-testid="no-items">Nenhuma categoria cadastrada.</ListGroup.Item>}   
        </ListGroup>
    )
}