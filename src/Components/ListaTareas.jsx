import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({arregloTareas, borraTarea}) => {
    return (
        <div>
            <ListGroup>
                {arregloTareas.map((tarea,index) => (
                    <ItemTarea key={index} muestraTarea={tarea} borraTarea={borraTarea}></ItemTarea>
                ))}
            </ListGroup>
        </div>
    );
};

export default ListaTareas;