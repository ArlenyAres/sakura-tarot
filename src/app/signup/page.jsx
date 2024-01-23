import HeaderForm from "../components/Login/HeaderForm";
import Signup from "../components/Signup/Signup";

export default function SignupPage(){
    return(
        <div className="bg-purple-dark pb-14">
            <HeaderForm
              heading="Abre una cuenta Mystika"
              paragraph="¿Ya tienes una? "
              linkName="Login"
              linkUrl="/login"
            />
            <div className="sm:px-10 md:px-50 lg:px-80 xl:px-100">
                <Signup/>
            </div>
        </div>
    )
}