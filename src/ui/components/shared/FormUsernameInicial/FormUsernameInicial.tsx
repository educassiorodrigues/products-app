import { Button, Card, Form } from "react-bootstrap";
import { Overlay } from "../overlay/Overlay";
import { FormEvent, ReactNode } from "react";
import { useOverlay } from "../../../../hooks/useOverlay";


interface FormUserNameInicialProps {
    overlayVisivel: boolean;
}

export const FormUserNameInicial = ({ overlayVisivel }: FormUserNameInicialProps): ReactNode => {
    const { userName, setUserName, hideOverlay } = useOverlay()

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        hideOverlay();
    }

    return (
        <Overlay active={overlayVisivel} className="d-flex justify-content-center align-items-center">
            <Card className="p-4">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nome de usuário</Form.Label>
                        <Form.Control type="text" placeholder="Digite seu nome de usuário" onChange={e => setUserName(e.target.value)} value={userName} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Salvar
                    </Button>
                </Form>
            </Card>

        </Overlay>
    )
}
