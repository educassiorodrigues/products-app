import { Button, Col, ListGroup, Row } from "react-bootstrap"
import { Category } from "../../../api/services"

interface CategoriesListProps {
    categories: Category[],
    deleteCategory: (id: string) => void
}
export const CategoriesList = (props: CategoriesListProps) => {
    return (
        <ListGroup data-testid="list-group">
            {props.categories.map((category, index) => (
                  <ListGroup.Item key={category.id} data-testid="list-group-item">
                    <Row className="px-2">
                        <Col sm="11">
                            <span>  {index}: {category.description}</span>
                        </Col>
                        <Col sm="1">
                            <Button variant="danger" onClick={() => props.deleteCategory(category.id)}>
                                Excluir
                            </Button>
                        </Col>
                    </Row>
                  
                </ListGroup.Item>
             ))}

             {props.categories.length === 0 && <ListGroup.Item data-testid="no-items">Nenhuma categoria cadastrada.</ListGroup.Item>}   
        </ListGroup>
    )
}