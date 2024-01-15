import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <header className="bg-purple03 p-4 flex justify-between items-center">
            <div>
                <a href='https://www.instagram.com' target='_blank'>
                    <FontAwesomeIcon
                        icon={faInstagram}
                        className='text-purple01 h-8 px-2'
                    />
                </a>
                <a href='https://www.youtube.com' target='_blank'>
                    <FontAwesomeIcon
                        icon={faYoutube}
                        className='text-purple01 h-8 px-2'
                    />
                </a>
                <a href='https://www.x.com' target='_blank'>
                    <FontAwesomeIcon
                        icon={faXTwitter}
                        className='text-purple01 h-8'
                    />
                </a>
            </div>
            <p className="text-purple01"> ® 2024 Mystika. All rights reserved.</p>
        </header>

    )
};