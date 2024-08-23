import Dashnav from "./dashnav.jsx";
import MainDash from "./maindash.jsx";
import Rightscan from "./rightscan.jsx";

export default function Dashmain() {
    return(
        <main className="space-y-[0.5rem]">
            <Dashnav />
            <section className="flex">
                <MainDash />
                <Rightscan />
            </section>
        </main>
    )
}