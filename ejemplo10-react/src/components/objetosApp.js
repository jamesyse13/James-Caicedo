import { useState } from "react";
import Objetos from "./objetos";

export default function ObjetoApp() {
    //hook -> permiten tener interacción con el usuario
    //useSate -> es un hook para crear un estado
    //etiqueta seria un getter y setEtiqueta seria un setter
    const [etiqueta, setEtiqueta] = useState("Clase 6");

    const [cuerpo, setCuerpo] = useState([]);

    function handleEnviar(event) {
        event.preventDefault();
        const newObjeto = {
            id: crypto.randomUUID(),
            etiqueta: etiqueta
        };

        const copia = [...cuerpo];
        copia.unshift(newObjeto);
        setCuerpo(copia);
        setEtiqueta('');
    }

    /*
    function handleClick(event) {
        event.preventDefault();
        setEtiqueta("Cambios");
    }*/

    function handleCambios(event) {
        const value = event.target.value;
        setEtiqueta(value);
        value.setEtiqueta('');
    }

    return (
        //ClassName permite agregar estilo
        // objFormulario crea un formulairo 
        // objInput crea un campo de lectura
        // objBoton crea boton
        <div className='objContenedor'>
            <form className='objFormulario'
            onSubmit={handleEnviar}
            >    
                <input className='objInput'
                    onChange={(handleCambios)}
                />
                <input
                    // onClick={handleClick}
                    onClick={handleEnviar}
                    className='objBoton'
                    type="submit"
                    value="crear objeto"
                />
                {/*
                {etiqueta}
                */}
            </form>

            <div className="cuerpoContenedor">
                {
                    cuerpo.map(item => (
                        //<div>{item.id}</div>
                        <Objetos
                        key={item.id}
                        item={item}
                        />  
                    ))
                }
            </div>
        </div>
    );
}