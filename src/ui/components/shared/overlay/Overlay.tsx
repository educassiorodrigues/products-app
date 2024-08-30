import { HTMLAttributes, ReactNode } from "react"

interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode,
    active: boolean,
    className: string
}

export const Overlay = ({ children, active, className, ...props}: OverlayProps): ReactNode => {

    if (!active) {
        return (<>{children}</>)
    }

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-25 z-3 w-100 h-100 ${className}`} {...props} >
            {children}
        </div>
    )
}
