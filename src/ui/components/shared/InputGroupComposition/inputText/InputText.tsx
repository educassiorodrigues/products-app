import { InputHTMLAttributes } from "react"

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> { }

export const InputText = (props: InputTextProps) => {
    return (
        <input
            type="text"
            className="border border-gray-900 rounded-sm"
            {...props}
        />
    )
}