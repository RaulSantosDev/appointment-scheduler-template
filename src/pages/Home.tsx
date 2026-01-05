import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import Hero from "../components/sections/Hero"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        
          {/* <div><Link
            to="/agendar"
            className="px-8 py-4 rounded-lg bg-primary text-black font-semibold hover:opacity-90 transition"
          >
            Agendar cita 
          </Link> <div>*/}
        
      </main>
      <Footer />
    </>
  )
}

