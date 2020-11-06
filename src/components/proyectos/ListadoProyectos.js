import React from 'react';
import Proyecto from './Proyecto';

const ListadoProyectos = () => {

    const proyectos = [
        {nombre: 'Tienda virtual'},
        {nombre: 'Instranet'},
        {nombre: 'Diseño de Sitio web'}
    ]

    return ( 

        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto 
                    proyecto = {proyecto}
                />
            ))}
        </ul>

     );
}
 
export default ListadoProyectos;