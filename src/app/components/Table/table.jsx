'use client'
import { useEffect, useState } from 'react';
import { getAll } from '@/app/services/historialUser';


const Table = () => {
    const [dataTable, setDataTable] = useState([]);
    const info= getAll();
    console.log(info);
    

    // useEffect(()=>{
    //     historial.getAll().then(res => console.log(res.data.data) )
    //     console.log(res.data)
    // })

    return (
        <div>
            <h1 className="text-center">Historial de Usuarios</h1>
        </div>
    )
}
export default Table