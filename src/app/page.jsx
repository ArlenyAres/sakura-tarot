"use client";
import React, { useState, useEffect } from "react";
import TarotDesk from "./components/TarotDesk/TarotDesk";
import Modal from "../app/components/Modal/Modal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const modalTimeout = setTimeout(() => {
      setShowModal(true);
    }, 2000);

    return () => clearTimeout(modalTimeout);
  }, []);

  const handleModalClose = () => {
    setShowModal(false);
  };
  
  const cardRoles = ["PASADO", "PRESENTE", "FUTURO"];

  return (
    <main className="bg-purple-medium pt-10 px-10">
      <TarotDesk/>
      {showModal && <Modal onClose={handleModalClose} />}
    </main>
  );
};

export default Home;

