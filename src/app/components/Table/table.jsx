import { getAll } from '@/app/services/historialUser';


const Table = async () => {
    const info= await getAll();
    console.log(info);
    

    return (
        <div>
            <h1 className="text-center">Historial de Usuarios</h1>
            <ul>
                {
                    info.map((item) => 
                        (<li key={item.id} > { Array.isArray(item.reading)
                            ? 
                            (item.reading.map((card) => (<div key={card.id}>{card.meaning}</div>))
                        ): (<p>no results</p>)
                        }
                            </li>)
                    )
                }
            </ul>
        </div>
    )
}
export default Table