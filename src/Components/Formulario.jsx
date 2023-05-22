import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";


const Formulario = () => {
    const [tarea, setTarea] = useState('');
    const [tareas, setTareas] = useState(
        JSON.parse(localStorage.getItem('tareas') || [])
    );

    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }, [tareas]);

    const borraTarea = (nombreTarea) => 
    {
        //no puedo usar splice puesto que modificaria directamente el arreglo lo que no esta permitido en React.
        //Filter es inmutable, osea que retorna un valor.
        let arregloFlitrado = tareas.filter((itemTarea) => itemTarea !== nombreTarea);
        setTareas(arregloFlitrado);
    }

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
            <ListaTareas arregloTareas={tareas} borraTarea={borraTarea}/>
        </div>
    );
};

export default Formulario;