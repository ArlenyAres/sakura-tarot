"use client";

import React, { useState, useEffect } from "react";

const ReadingsTable = () => {
  const [readings, setReadings] = useState([]);

  useEffect(() => {
    const fetchReadings = async () => {
      try {
        // Fetch readings from the fake JSON server
        const response = await fetch("http://localhost:3001/readings");
        const data = await response.json();
        setReadings(data);
      } catch (error) {
        console.error("Error fetching readings:", error);
      }
    };

    fetchReadings();
  }, []);

  return (
    <>
      <div className=" overflow-x-auto shadow-md sm:rounded-lg">
        <div className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <table class="table">
            <thead>
              <tr className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                <th>ID</th>
                <th>NOMBRE</th>
                <th>FECHA DE LA TIRADA</th>
                <th>TIRADA</th>
                <th>ACCIÓN</th>
              </tr>
            </thead>
            <tbody>
              {readings.map((reading) => (
                <tr key={reading.id}>
                  <th>1</th>
                  <td>{reading.id}</td>
                  {/* <td>08/12/2023</td> */}
                  <td>{reading.reading[0].spanishName}</td>
                  <td>{reading.reading[1].spanishName}</td>
                  <td>{reading.reading[2].spanishName}</td>
                  {/* <span class="badge badge-ghost badge-sm">PASADO - Viento: Simboliza el intelecto, la sabiduría, la meteorología muestra información valiosa </span>
                <span class="badge badge-ghost badge-sm">PRESENTE- Viento: Simboliza el intelecto, la sabiduría, la meteorología muestra información valiosa</span>
                <span class="badge badge-ghost badge-sm">FUTURO - Viento: Simboliza el intelecto, la sabiduría, la meteorología muestra información valiosa</span> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ReadingsTable;
