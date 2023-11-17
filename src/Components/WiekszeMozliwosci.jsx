import vue from "/images/vue.png"
import svelte from "/images/svelte.png"

import { useInView, useAnimate, stagger } from "framer-motion"
import { useState } from "react"
import { useEffect } from "react"


export default function WiekszeMozliwosci() {

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

    return (
        <div ref={scope} className="grid grid-half h-full pb-20">
            <div className="flex justify-center items-center flex-col gap-y-12">
                <p className="text-2xl w-3/4">Sam HTML, CSS i JS jest wystarczający do zrobienia prostych aplikacji przeglądarkowych. Za to jak potrzebujemy większą aplikacje, sam JavaScript robi się pomieszany i trudny do utrzymania. Na rozwiązanie temu stworzono “Frameworki”.</p>
            </div>
            <div className="flex justify-center flex-wrap items-center gap-x-20 pr-8 pb-20">
                <img src={svelte} alt="" className={`h-2/6`} />
                <img src={vue} alt="" className={`h-2/6`} />
            </div>
        </div>
    )
}
