import logo from "../assets/logo-webtube.png"
import { Menu } from "lucide-react"
import { Button } from "../components/Button"

export function PageHeader() {
    return (
    <div className="
    flex gap-10 lg:gap-20 
    justify-between">
        <div className="
        flex gap-4 
        items-center
        flex-shrink-0">
            <Button variant="ghost" size="icon">
                <Menu /> 
            </Button>
                <a href="/">
                <img src={logo} className="h-6"></img>
                </a>
            

        </div>
        <div></div>
        <div></div>
    </div>
    )
}
