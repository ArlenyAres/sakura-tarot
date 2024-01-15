export default function MyButton({ buttonText, buttonColor }){
    return(
        <>
            <button className={`${ buttonColor } text-white px-9 py-2 rounded-full font-bold`}>{ buttonText }</button>
        </>
    );
};