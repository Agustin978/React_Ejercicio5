import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({arregloTareas}) => {
    return (
        <div>
            <ListGroup>
                {arregloTareas.map((tarea,index) => (
                    <ItemTarea key={index} muestraTarea={tarea}></ItemTarea>
                ))}
            </ListGroup>
        </div>
    );
};

export default ListaTareas;