
export default function Element(props) {
    return (
        <div>
            <span className="text-elementOpening text-[3rem] inline"><>&#60;</></span>
            <span className="text-element text-[3rem] inline">{props.title}</span>
            <span className="text-elementOpening text-[3rem]">/<>&#62;</></span>
        </div>
    )
}
