'use client'

import MyButton from "../button/button";
import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();

    const isHomePage = router.pathname === '/';
    const buttonText = isHomePage ? 'Instrucciones' : 'Inicio';
    const toPath = isHomePage ? '/instrucciones' : '/';

    return (
        <header>
            <div className="bg-lilac-light p-4 flex justify-center md:justify-between items-center">
                <div>
                    <a href="/">
                        <img
                            src="./assets/mystika-logo.png"
                            alt="Logo Mystika"
                            className="h-10"
                        />
                    </a>
                </div>
                <div>
                    <a href={toPath} className="hidden md:block">
                        <MyButton
                            buttonColor="bg-purple-dark"
                            buttonText={buttonText}
                        />
                    </a>
                </div>
            </div>
            <div className="bg-purple-medium p-4 flex justify-end md:hidden">
                <MyButton
                    buttonColor="bg-purple-dark"
                    buttonText={buttonText}
                />
            </div>
        </header>
    )
};