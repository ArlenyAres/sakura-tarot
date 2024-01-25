import HeaderForm from "../components/Login/HeaderForm";
import Login from "../components/Login/Login";
import HeaderResponsive from "../components/HeaderResponsive/HeaderResponsive";

export default function LoginPage(){
    return(
        <div className="bg-purple-dark pb-14">
            <HeaderResponsive />
            //header form title
            <HeaderForm
                heading="Tu destino te espera en tu cuenta Mystika"
                paragraph="¿Aún no tienes?"
                linkName="Darte de alta"
                linkUrl="/signup"
            />
            <div className="sm:px-10 md:px-50 lg:px-80 xl:px-100">
            <Login />
            </div>
        </div>
    )
}


