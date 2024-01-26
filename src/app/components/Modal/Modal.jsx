"use client";
import { createUser } from '@/app/services/historialUser';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Modal({ onClose }) {
  const [userName, setUserName] = useState('');
  const nameId = uuidv4();
  const newDate = new Date().toLocaleDateString();

  const handleInputChange = async (e) => {
    e.target.value
    
    await createUser({
      id: nameId, date: newDate, name: userName, reading: []
    })
    setUserName(userName)
    localStorage.setItem('userNameId', nameId)
    console.log(nameId, userName)
  };

  const handleSaveClick = () => {
    if (userName.trim() !== '') {
      onClose(userName);
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
      <form onSubmit={handleInputChange} className="p-4 md:p-5">
        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-purple-text dark:text-white">
        </label>
        <input
          type="text"
          placeholder="Nombre"
          value={userName}
          onChange={(e) => {setUserName(e.target.value)}}
          className="w-full bg-white border border-lilac-medium text-purple-text text-sm rounded-lg focus:ring-purple-dark focus:border-purple-medium p-2.5 dark:bg-purple-dark dark:border-purple-dark dark:placeholder-lilac-medium dark:text-white"
          required
        />
        <button
        onClick={handleSaveClick}
        className="md:w-[28%] lg:w-1/6 xl:w-[28%] 2xl:w-2/6 text-white bg-purple-dark hover:bg-purple-medium focus:outline-none focus:ring-purple-medium font-bold rounded-full text-lg px-8 py-2 mt-3 dark:bg-purple-medium dark:hover:bg-purple-dark dark:focus:ring-purple-dark"
        >
          <span className='flex justify-center'>Empezar</span>
        </button>
      </form>
      
    </div>
  );
}

export default Modal;

