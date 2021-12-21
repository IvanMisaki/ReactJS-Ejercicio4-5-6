import React, { useEffect, useState } from 'react';

const Clockf = () => {

    const state = {
        // Se genera una fecha como estado inicial del componente
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    };

    const [estado_nuevo, actualizar_estado] = useState(state);

    useEffect(() => {

        const intervalID = setInterval(() => {

            const state_new = {
                fecha: new Date(),
                edad: estado_nuevo.edad + 1
            };

            //console.log("componente actualizado " + estado_nuevo.edad)
            actualizar_estado(state_new)
        }, 1000)

        return () => {
            clearInterval(intervalID)
        };
    },[estado_nuevo]);//se ejecutará siempre que cambie estado_nuevo

    return (
        <div>
            <h1>Hola Actual: {estado_nuevo.fecha.toLocaleTimeString()}</h1>
            <h1>{ state.nombre } { state.apellidos }</h1>
            <h1>Edad: { estado_nuevo.edad }</h1>
        </div>
    );
}

export default Clockf;
