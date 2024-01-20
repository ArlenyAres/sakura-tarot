

import Image from "next/image"
import Link from "next/link"

export default function HeaderForm({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div className="sm:px-10 md:px-20 pt-8">
            <div className="flex justify-center">
                <Image 
                    alt=""
                    // className="h-14 w-10"
                    src="/assets/future-icon.png"
                    height={64}
                    width={54}
                    objectFit="cover"
                    />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-lilac-medium">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-white mt-5">
            {paragraph} {' '}
            <Link href={linkUrl} className="text-lilac-light font-extrabold hover:text-lilac-medium">
                {linkName}
            </Link>
            </p>
        </div>
    )
}
