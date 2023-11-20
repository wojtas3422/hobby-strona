import { useEffect, useState } from "react";

import { useAnimate } from "framer-motion";

export default function Hero() {

    const [scope, animate] = useAnimate()

    const title = `"Wojciech Michalski"`
    const titleArr = title.split("")
    const [anim, setAnim] = useState("")

    useEffect(() => {

        animate("span", { opacity: 0, y: 50 }, { ease: "easeInOut", duration: 0 })

        setTimeout(() => {
            animate("span", { opacity: 1, y: 0 }, { ease: "easeInOut", duration: 0.5 })
        }, 100 * 19 + 1300);

        for (let i = 0; i < titleArr.length; i++) {
            setTimeout(() => {

                setTimeout(() => {
                    setAnim(prevAnim => {
                        return prevAnim += titleArr[i]
                    })
                }, 100 * i);
            
            }, 1000);
        }

    }, [])

    return (
        <section className="bg-background flex relative pb-20 h-screen flex-col text-center justify-center items-center snap-start">
            <div className="hero-name-container">
                <span className="text-green text-5xl md:text-[5rem] hero-name">{anim}</span>
            </div>
            <div ref={scope} className="hero-subtitle mt-10">
                <span className="text-elementOpening text-3xl md:text-[3rem] inline"><>&#60;</></span>
                <span className="text-element text-3xl md:text-[3rem] inline">PoznajMojeHobby</span>
                <span className="text-elementOpening text-3xl md:text-[3rem]">/<>&#62;</></span>
            </div>
        </section>
    )
}