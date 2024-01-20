import Link from "next/link"

export default function Logo() {
  return (

    <Link href="/" className="btn btn-ghost text-xl hover:bg-purple-medium hover:bg-opacity-50">
        {/* Mobile Size: Visible logo-ball only */}
        <img
            src="/assets/logo-ball.png"
            alt="bola de cristal"
            className="h-10 sm:hidden"
        />

        {/* Tablet and Up: Visible both logo-ball and logo-text */}
        <div className="hidden sm:flex">
            <img
                src="/assets/logo-ball.png"
                alt="bola de cristal"
                className="h-10"
            />
            <img
                src="/assets/logo-text.png"
                alt="Mystica"
                className="h-10"
            />
        </div>
    </Link>
  )
}
