'use client'

import React from "react";

function HistorialPage() {
    return (
        <>
            <div className=" overflow-x-auto shadow-md sm:rounded-lg">

                <div className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400" >
                    <table class="table">


                        <thead>
                            <tr className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                                <th></th>
                                <th>NOMBRE</th>
                                <th>FECHA DE LA TIRADA</th>
                                <th>TIRADA</th>
                                <th>ACCION</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <th>1</th>
                                <td>Florence</td>
                                <td>08/12/2023</td>

                                <span class="badge badge-ghost badge-sm">PASADO - Viento: Simboliza el intelecto, la sabiduría, la meteorología muestra información valiosa </span>
                           
                                <span class="badge badge-ghost badge-sm">PRESENTE- Viento: Simboliza el intelecto, la sabiduría, la meteorología muestra información valiosa</span>
                                
                                <span class="badge badge-ghost badge-sm">FUTURO - Viento: Simboliza el intelecto, la sabiduría, la meteorología muestra información valiosa</span>
                            </tr>

                            <tr>
                                <th>2</th>
                                <td>Florence</td>
                                <td>09/12/2023</td>
                                <br />
                                <span class="badge badge-ghost badge-sm">PASADO - Viento: Simboliza el intelecto, la sabiduría, la meteorología muestra información valiosa </span>
                                <br />
                                <span class="badge badge-ghost badge-sm">PRESENTE- Viento: Simboliza el intelecto, la sabiduría, la meteorología muestra información valiosa</span>
                                <br />
                                <span class="badge badge-ghost badge-sm">FUTURO - Viento: Simboliza el intelecto, la sabiduría, la meteorología muestra información valiosa</span>

                            </tr>

                            <tr>
                                <th>3</th>
                                <td>Florence</td>
                                <td>10/12/2023</td>
                                <br />
                                <span class="badge badge-ghost badge-sm">PASADO - Viento: Simboliza el intelecto, la sabiduría, la meteorología muestra información valiosa </span>
                                <br />
                                <span class="badge badge-ghost badge-sm">PRESENTE- Viento: Simboliza el intelecto, la sabiduría, la meteorología muestra información valiosa</span>
                                <br />
                                <span class="badge badge-ghost badge-sm">FUTURO - Viento: Simboliza el intelecto, la sabiduría, la meteorología muestra información valiosa</span>


                            </tr>
                        </tbody>
                    </table>
                </div >
            </div >
        </>


    )


}
export default HistorialPage