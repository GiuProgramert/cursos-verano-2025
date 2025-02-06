export default function Button({ variant = "normal", children, disabled = false }) {
    const variantClassname = variant === "normal" ?
        "bg-orange-400 hover:bg-orange-500 text-white disabled:bg-gray-400" :
        "border border-orange-400 text-orange-500 hover:bg-gray-100 disabled:border-gray-400 disabled:text-gray-400";

    return (
        <button className={"py-2 px-4 rounded-lg shadow-md font-medium" + " " + variantClassname} disabled={disabled}>
            {children}
        </button>
    )
}