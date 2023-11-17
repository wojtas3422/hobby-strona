import css from "/images/css.png"
import js from "/images/js.png"

import { useInView, useAnimate, stagger } from "framer-motion"
import { useState, useEffect, useRef } from "react"

export default function PonadHTML() {

    const [Viewed, setViewed] = useState(false)
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope)

    useEffect(() => {
        animate("div", { opacity: 0, y: 50 }, { ease: "easeInOut", duration: 0.5 })
    }, [])

    useEffect(() => {
        if (isInView && !Viewed) {
            animate("div", { opacity: 1, y: 0 }, { ease: "easeInOut", duration: 0.5, delay: stagger(0.3, { startDelay: 0.5 }) })
            setViewed(true)
        } else if (!Viewed) {
            animate("div", { opacity: 0, y: 50 }, { ease: "easeInOut", duration: 0.5 })
        }
    }, [isInView])

    const buttonRef = useRef(null)
    const [clickCount, setClickCount] = useState(0)

    function incremenetCount() {
        setClickCount(clickCount + 1)

        setTimeout(() => {
            buttonRef.current.classList.remove("flash")
        }, 300);

        buttonRef.current.classList.add("flash")
    }

    return (
        <div ref={scope} className="grid grid-half h-full pb-20">
            <div className="flex justify-center items-center flex-col gap-y-12">
                <p className="text-2xl w-3/4">Do samego html możemy dodać wcześniej wspomniany css i Javascipt. Sam css pozwala nam zdefinować wygląd strony, a JavaScript dodaje interaktywność.</p>
                <button ref={buttonRef} className="border-2 border-s-white p-2 rounded-lg jsButton" onClick={() => incremenetCount()}>Naciśnij mnie! {clickCount}</button>
            </div>
            <div className="flex justify-center flex-wrap items-center gap-20 pr-8 pb-20">
                <img src={css} alt="" className={`h-2/6`} />
                <img src={js} alt="" className={`h-2/6`} />
            </div>
        </div>
    )
}
