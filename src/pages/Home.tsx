import { About } from "../components/sections/About";
import { Data } from "../components/sections/Data";
import { Footer } from "../components/sections/Footer";
import { Introduction } from "../components/sections/Introduction";
import NavBar from "../components/sections/NavBar";
import { Reviews } from "../components/sections/Reviews";

export function Home() {
    return (
        <>
            <NavBar />
            <Introduction />
            <About />
            <Data />
            <Reviews />
            <Footer />
        </>
    )
}