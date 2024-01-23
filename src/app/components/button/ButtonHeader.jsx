import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ButtonHeader({ path1, path2, buttonText1, buttonText2, buttonColor }){
    const router = useRouter();
    const [currentPath, setCurrentPath] = useState(path1);

    const handleClick = () => {
        const newPath = currentPath === path1 ? path2 : path1;
    
        setCurrentPath(newPath);
    
        router.push(newPath);
      };

    return(
        <>
            <button
                className={`${ buttonColor } text-white px-5 py-2 rounded-full font-bold`}
                onClick={handleClick}>
                    { currentPath === path1 ? buttonText1 : buttonText2 }
            </button>
        </>
    );
};