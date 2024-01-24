"use client";

import React, { useState } from 'react';

function Modal({ onClose }) {
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSaveClick = () => {
    if (name.trim() !== '') {
      onClose(name);
    }
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/3 flex flex-col items-center pb-5 bg-beige rounded-lg shadow dark:bg-purple-text">
      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-purple-text">
        <h3 className="text-base font-semibold text-purple-text dark:text-white text-center">
          Entra tu nombre para jugar y guardar tus lecturas de tarot:
        </h3>
        <span className="sr-only">Close modal</span>
      </div>
      <div className="p-4 md:p-5">
        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-purple-text dark:text-white">
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Nombre"
          value={name}
          onChange={handleInputChange}
          className="w-full bg-white border border-lilac-medium text-purple-text text-sm rounded-lg focus:ring-purple-dark focus:border-purple-medium p-2.5 dark:bg-purple-dark dark:border-purple-dark dark:placeholder-lilac-medium dark:text-white"
          required
        />
      </div>
      <button
        onClick={handleSaveClick}
        className="md:w-[28%] lg:w-1/6 xl:w-[28%] 2xl:w-2/6 text-white bg-purple-dark hover:bg-purple-medium focus:outline-none focus:ring-purple-medium font-bold rounded-full text-lg px-5 py-2.5 text-center dark:bg-purple-medium dark:hover:bg-purple-dark dark:focus:ring-purple-dark"
      >
        Empezar
      </button>
    </div>
  );
}

export default Modal;

