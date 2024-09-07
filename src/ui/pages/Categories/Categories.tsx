import { FormEvent, useState } from "react"
import { Button, Card, Col, Form, Row } from "react-bootstrap"
import { useCategoriesMutations } from "../../../api/mutations/categories.mutation"
import { useCategoriesQuery } from "../../../api/queries/categories.query"
import { CategoriesList } from "../../components"

export const Categories = () => {
    const [newCategory, setNewCategory] = useState<string>('')

    const { createCategoryMutation, deleteCategoryMutation } = useCategoriesMutations()
    const { getCategoriesQuery } = useCategoriesQuery()

    if (getCategoriesQuery.isError) {
        return getCategoriesQuery.error.toString();
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        createCategoryMutation.mutate(newCategory, {
            onSuccess: () => {
                setNewCategory('');
            }
        });
    }

    const handleDeleteCategory = (id: string) => {
        deleteCategoryMutation.mutate(id);
    }

    return (
        <Card className="p-4">
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col sm="8">
                        <Form.Group>
                            <Form.Label>Nome da Categoria</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Nova categoria" 
                                value={newCategory} 
                                onChange={event => setNewCategory(event.target.value)} 
                            />
                        </Form.Group>
                    </Col>

                    <Col sm="4" className="d-flex align-items-end justify-content-end">
                        <Button type="submit">
                           Adicionar Categoria
                        </Button>
                    </Col>
                </Row>

            </Form>

            <Row>
                <h2 className="font-bold text-xl  text-blue-700" data-testid="categories-title">Categorias</h2>

                

                {getCategoriesQuery.isSuccess && <CategoriesList categories={getCategoriesQuery.data} deleteCategory={handleDeleteCategory} />}

                {getCategoriesQuery.isPending && <span data-testid="loading">Loading</span>}
            </Row>
        </Card>

    )
}
