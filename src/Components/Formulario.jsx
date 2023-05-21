import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";


const Formulario = () => {
    const [tarea, setTarea] = useState('');
    const [tareas, setTareas] = useState([]);
    return (
        <div>
            <Form onSubmit={(e) => {
                e.preventDefault();
                setTareas([...tareas, tarea]);
                setTarea[''];
            }}>
                <Form.Group className="mb-3 d-flex" controlId="tarea">
                    <Form.Control type="text" placeholder="Ingrese una tarea" 
                    onChange={(e) => setTarea(e.target.value)}
                    value={tarea}
                    />
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form.Group>
            </Form>
            <ListaTareas arregloTareas={tareas}/>
        </div>
    );
};

export default Formulario;