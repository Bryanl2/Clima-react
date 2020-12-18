import React, {useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({busqueda,guardarBusqueda,guardarConsultar}) => {
    
    //State Formulario
   

    const [error,guardarError]=useState(false);

    //Extraer datos de la búsqueda

    const {ciudad,pais}=busqueda;

    //Función que coloca los elementos en el state

    const handleChange= e =>
        //Actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        });

    //Cuando el usuario da click al form

    const handleSubmit= e=>{
        e.preventDefault();
        
        //Validar
        if(ciudad.trim()==='' || pais.trim()===''){
            guardarError(true);
            return;
        }

        guardarError(false);

        //Pasarlo al componente Principal
        guardarConsultar(true);
    }
   
   
    return ( 
            //No se puede con for porque es palabra reservada de javascript entonces se cambia por htmlFor
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error mensaje="Ambos campos son obligatorios"/>:null}

            

            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}

                />
                <label htmlFor="ciudad">Ciudad: </label> 

            </div>

            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                        <option value="">--Seleccione un país--</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">País: </label> 
            </div>

            <div className="input-field col s12"
                 onClick={handleSubmit}
            >
                <input 
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                    
                />

            </div>
        </form>
     );
}

Formulario.propTypes={
    busqueda:PropTypes.object.isRequired,
    guardarBusqueda:PropTypes.func.isRequired,
    guardarConsultar:PropTypes.func.isRequired
}
 
export default Formulario;