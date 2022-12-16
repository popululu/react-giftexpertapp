// import React, { useState, useEffect } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [count, setCount] = useState(0);

    // const [images, setImages] = useState([]);

    // useEffect( ()=> {
    //     // getGifs();
    //     getGifs( category )//esto retorna una promesa
    //         .then( imgs => setImages( imgs ) )
    //         // lo de arriba es lo mismo que poner esto:
    //         // porque si el argumento y lo que mandas es lo mismo lo quitas
    //         //.then( setImages )
    // }, [ category ])
//---------------------------------------------------------------------------------
//  const state = useFetchGifs();
    const { data:images, loading } = useFetchGifs( category );
   
    
  return (
    <div>
        <h3 className="animate__animated animate__fadeIn">{ category }</h3>

        {/* { loading ? <p>Loading</p> : null} */}
        { loading && <p  className="animate__animated animate__flash">Loading</p>}
  
        {/* <h3>{ count }</h3> */}
        {/* <button onClick={ ()=> setCount( count + 1)}></button> */}
        <ol className='card-grid'>
           {
                images.map( img =>(
                //images.map( img =>(
                // images.map( ({ id, title }) =>(
                    // <li key={ img.id }>{ img.title }</li>
                    // <li key={ id }>{ title }</li>
                    <GifGridItem 
                         key={ img.id }
                        // img={ img } 

                        //otra forma de pasar cosas a un componente
                        // mando las propiedades de las imagenes como una propiedad independiente
                        { ...img }
                    />
                ))
           }
        </ol>
    </div>
  )
}
