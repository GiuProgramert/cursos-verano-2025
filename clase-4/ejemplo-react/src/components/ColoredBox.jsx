export default function ColoredBox({color, children}) {
    const colorClassName = !color ? "bg-white" : `bg-[${color}]`

    return (
        <div 
            class={"py-[20px] px-[16px] h-[64px] grid place-content-center text-xl text-white uppercase" + " " + colorClassName}
            style={{
                background: !color ? "white" : color
            }}
        >          
            {children}
        </div>
    )
}