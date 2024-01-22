import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className="bg-lilac-light p-4 flex justify-center md:justify-between items-center">
            <div className='flex flex-row'>
                <a href='https://www.instagram.com' target='_blank'>
                    <FontAwesomeIcon
                        icon={faInstagram}
                        className='text-purple-dark h-8 px-3'
                    />
                </a>
                <a href='https://www.x.com' target='_blank'>
                    <FontAwesomeIcon
                        icon={faXTwitter}
                        className='text-purple-dark h-8 px-3'
                    />
                </a>
                <a href='https://www.youtube.com' target='_blank'>
                    <FontAwesomeIcon
                        icon={faYoutube}
                        className='text-purple-dark h-8 px-3'
                    />
                </a>
            </div>
            <p className="text-purple-dark hidden md:block"> ® 2024 Mystika. All rights reserved.</p>
        </footer>

    )
};