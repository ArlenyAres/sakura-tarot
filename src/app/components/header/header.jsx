export default function Header() {
    return (
        <header className="bg-purple03 p-4 flex justify-between items-center">
            <div>
                <a href="/">
                    <img 
                        src="./assets/logo.png"
                        alt="Logo Mystica"
                        className="h-8"
                    />
                </a>
            </div>
            <div>
                <button className="bg-purple01 text-white px-4 py-2 rounded-full font-bold">Inicio</button>
            </div>
        </header>

    )
};