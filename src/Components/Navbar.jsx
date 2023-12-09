import { useState } from "react"

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
        <div onClick={() => setIsOpen(!isOpen)} className="fixed top-5 z-50 text-xl md:text-5xl bg-[#121212] py-2 px-5 right-5 rounded-md cursor-pointer"><>&#60;</></div>
            <nav className={`md:block flex items-center flex-col w-screen md:w-[500px] h-screen navbar fixed p-10 right-0 ${isOpen ? "" : "translate-x-full"} bg-black z-40`}>
                <h1 className=" mb-10 text-3xl">wojteko.dev</h1>
                <div className="flex flex-col gap-2 text-xl text-center md:text-left">
                    <a className="hover:underline" href="#MojeHobby">Moje hobby</a>
                    <a className="hover:underline" href="#o-mnie">O mnie</a>
                    <a className="hover:underline" href="#JezykHTML">Język HTML</a>
                    <a className="hover:underline" href="#PonadHTML">Ponad HTML</a>
                    <a className="hover:underline" href="#WiekszeMozliwosci">Większe Możliwości</a>
                    <a className="hover:underline" href="#Framework">Framework?</a>
                    <a className="hover:underline" href="#ReactJs">React.Js</a>
                    <a className="hover:underline" href="#Runtime">Runtime</a>
                    <a className="hover:underline" href="#Koniec">Koniec</a>
                </div>
            </nav>

        </>
    )
}
