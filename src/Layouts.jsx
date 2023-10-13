export const TextField = ({type}) => {
    return (
        <input type={type} required  className="mx-3 my-1 outline outline-1 w-[200px]" />
    )
}

export const Button = ({children, type}) => {
    return (
        <button type={type} className={"transition transition-150 ease-in-out bg-blue-600 rounded-lg p-1 text-white hover:bg-blue-500 " } >{children}</button>
    )
}