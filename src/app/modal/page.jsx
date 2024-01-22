"use client";

// import { useState } from "react";

import React from 'react';

function Modal() {
  return (
    <>
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-purple-text dark:text-white">
            Entra tu nombre para guardar las lecturas
          </h3>
          <span className="sr-only">Close modal</span>
        </div>
        <div className="p-4 md:p-5">
          <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Nombre
          </label>
          <input
            type="name"
            name="firstName"
            id="firstName"
            placeholder="Nombre"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div className="flex justify-between">
          <div className="flex items-start">
          </div>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-purple-dark hover:bg-purple-medium focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Guardar
        </button>
      </div>
    </>
  );
}

export default Modal;
