import { HTMLAttributes } from "react"

interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
    label: string
}
export const Label = (props: LabelProps) => {
    return (
        <label className="font-bold text-blue-400 text-start" {...props}>
            {props.label}
        </label>
    )
}