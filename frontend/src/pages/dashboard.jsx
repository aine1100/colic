import Dashmain from "../components/dashmain"
import Sidenav from "../components/sidenav"

export default function Dashpage() {
    return(
        <main className="bg-[#040405] flex">
            <Sidenav />
            <Dashmain />
        </main>
    )
}