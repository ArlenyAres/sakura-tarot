"use client"

import { useState } from "react";
import MyButton from "../button/button";

export default function Login() {

const buttonText = "Enviar";

const [input, setInput] = useState({
    username: "",
    password: "",
})

const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input.username !== "" & input.password !== "") {
        //dispatch action from hooks
    }
    alert("por favor pon tu usuario y contraseña");
};

const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
        ...prev,
        [name]: value,
    }));
};

  return (
    <div className="bg-lilac-light m-10 border-dashed border-4 border-purple-dark rounded-3xl py-5">
        <form onSubmit={handleSubmitEvent} className="flex flex-col items-center justify-center">
            <div className="form-control w-full max-w-xs">
                <label htmlFor="user-email" className="label">
                    <span className="label-text">¿Cuál es tu correo electrónico?</span>
                </label>
                <input 
                    type="email"
                    id="user-email"
                    name="email"
                    placeholder="ejemplo@gmail.com"
                    aria-describedby="user-email"
                    aria-invalid="false"
                    onChange={handleInput}
                    className="input input-bordered w-full max-w-xs"
                />
        <div id="user-email" className="sr-only">
            Por favor pon un correo electrónico válido. Debe contener un @
            </div>
        </div>
        <div className="form-control w-full max-w-xs">
            <label htmlFor="password" className="label">
                <span className="label-text">¿Cuál es tu contraseña:</span>
            </label>
            <input
            type="password"
            id="password"
            name="password"
            aria-describedby="user-password"
            aria-invalid="false"
            onChange={handleInput}
            className="input input-bordered w-full max-w-xs"
            />
            <div id="user-password" className="sr-only">
                Tu contraseña debe contener un mínimo de 6 caracteres.
            </div>
        </div>
            <div className="py-6">
                <MyButton
                        className="btn-submit"
                        buttonColor="bg-purple-dark hover:bg-purple-medium"
                        buttonText={buttonText}
                />
            </div>
        </form>
    </div>
  )
}
