import { cva } from "class-variance-authority"


const buttonStyles = cva(["hover:bg-secondary-hover", "transition-colors"], {
    variants: {
        size: {
            default: [],
            icon: []
        }
    }
}
    
)

export function Button() {
    return <button />
}