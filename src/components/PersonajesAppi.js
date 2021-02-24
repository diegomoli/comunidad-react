import React, { useEffect, useState } from 'react';
import { PersonajesService } from '../services/PersonajesService';
import { Card } from './Card';



export const PersonajesAppi = () => {

    const [personajes, setPersonajes] = useState([]);
    const [selecPersonaje, setSelecPersonaje] = useState();

    

    useEffect(() => {
        PersonajesService().then(setPersonajes);
    }, [])
    // console.log(personajes);

    return (
        <div className="container">
            <div className="form-group">
            <label >Seleccione el personaje</label>
            <select className="form-control" name="" id="" onChange={e=>setSelecPersonaje(e.target.value)} value={selecPersonaje}>
                <option value="all">Todos</option>
                <option value="Alive">Vivo</option>
                <option value="unknown">Desconocido</option>
                <option value="Dead">Muerto</option>
            </select>
            </div>           
            <div className="row">
                {/* {personajes.map(personaje=>{
                    return(
                        <div className="col-sm mt-5">
                            <Card key={personaje.id} name={personaje.name} status={personaje.status} image={personaje.image} />
                        </div>
                        
                    );
                }).filter(item=>item.status===selecPersonaje)} */}
                {personajes.filter(item=>{
                    if(selecPersonaje==="all"){
                        return true
                    }
                    return item.status===selecPersonaje;
                })
                            .map(personaje=>{
                                return(
                                    <div className="col-sm mt-5">
                                        <Card key={personaje.id} name={personaje.name} status={personaje.status} image={personaje.image} />
                                    </div>
                                    
                                );
                            })}
            </div>
        </div>
        
    )
}
