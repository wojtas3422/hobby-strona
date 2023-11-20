import { useInView, useAnimate, stagger } from "framer-motion"
import { useState } from "react"
import { useEffect } from "react"

export default function SectionDesc(props) {
    const [Viewed, setViewed] = useState(false)
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope)

	useEffect(() => {
        animate("div", { opacity: 0, y: 50 }, { ease: "easeInOut", duration: 0.5 })
	}, [])

	useEffect(() => {
		if (isInView && !Viewed) {
			animate("div", { opacity: 1, y: 0 }, { ease: "easeInOut", duration: 0.5, delay: stagger(0.3, {startDelay: 0.5})})
            setViewed(true)
        } else if (!Viewed) {
			animate("div", { opacity: 0, y: 50 }, { ease: "easeInOut", duration: 0.5 })
		}
	}, [isInView])


    return (
        <div ref={scope} className="grid grid-sect h-[80%]">
            <div className="grid-centered opacity-0">
                <p className="md:text-2xl w-3/4">{props.title}</p>
            </div>
            <div className="grid-centered pr-8 !hidden text-center md:!grid">
                <img src={props.img} alt={props.imgAlt} className={`${props.bigImg ? 'h-3/4' : 'h-2/4'} ${props.smImg ? "!h-1/4" : ""} object-contain`} />
            </div>
        </div>
    )
}
