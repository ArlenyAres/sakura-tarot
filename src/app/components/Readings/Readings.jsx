'use client'
import { sakuraapi } from '@/app/services/historialUser'
import React, { useEffect, useState } from 'react'

function Readings({ fav, setFav }) {
    //Llamar al servicio
    //Almacenar esa respuesta dentro de un estado
    //Renderizar el resultado
    const [readings, setReadings] = useState([]); //HOOK - variable - método - estado inicial
    const service = sakuraapi();
    //const favsapi
    useEffect(() => {
        service.createFav(favsapi).then((res) => setReadings(res.data.results))
        //service.createFav(favsapi)
    }, [])
    return (
        <>
            <h2>Readings</h2>
            {
                readings.map((reading, index) => (
                    <p
                        key={index} reading={reading} fav={fav} setFav={setFav}></p>
                ))
            }
        </>
    )
}
export default Pokemons