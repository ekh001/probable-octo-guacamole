import logo from "../assets/logo-webtube.png"
import { Bell, Menu, Mic, Upload, User } from "lucide-react"
import { Button } from "../components/Button"

export function PageHeader() {
    return (
    <div className="
    flex gap-10 lg:gap-20 
    justify-between
    pt-2 mb-6 mx-4">
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
        <div>
            <form className="flex gap-4 flex-grow justify-center ">
                <div>
                    <Button type="button" size="icon" className="flex-shrink-0">
                        <Mic></Mic>
                    </Button>
                </div>
            </form>
        </div>
        <div className="flex flex-shrink-0 md:gap-2">
            <Button size="icon" variant="ghost">
                <Upload />
            </Button>

            <Button size="icon" variant="ghost">
                <Bell />
            </Button>

            <Button size="icon" variant="ghost">
                <User />
            </Button>
        </div>
    </div>
    )
}
