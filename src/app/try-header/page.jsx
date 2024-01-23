"use client"

import HeaderResponsive from "../components/HeaderResponsive/HeaderResponsive";
import HeaderForm from "../components/Login/HeaderForm";
import Login from "../components/Login/Login";


export default function page() {
  return (
    <div className="bg-purple-dark pb-14">
        <HeaderResponsive />
        <HeaderForm
            heading="Tu destino tu espera en tu cuenta"
            paragraph="¿Aún no tienes una? "
            linkName="Darte de alta"
            linkUrl="/signup"
        />
        <div className="sm:px-10 md:px-50 lg:px-80 xl:px-100">
          <Login />
        </div>
    </div>
  )
}
