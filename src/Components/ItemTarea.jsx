import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({muestraTarea}) => {
    return (
        <div>
            <ListGroup.Item className="d-flex justify-content-between">
                <p>Tarea: {muestraTarea}</p>
                <Button variant="danger">Borrar</Button>
            </ListGroup.Item>
        </div>
    );
};

export default ItemTarea;