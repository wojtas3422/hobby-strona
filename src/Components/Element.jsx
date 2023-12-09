
export default function Element(props) {
    return (
        <div className="pt-10">
            <span className="text-elementOpening text-3xl md:text-[3rem] inline"><>&#60;</></span>
            <span className="text-element text-3xl md:text-[3rem] inline">{props.title}</span>
            <span className="text-elementOpening text-3xl md:text-[3rem]">/<>&#62;</></span>
        </div>
    )
}
