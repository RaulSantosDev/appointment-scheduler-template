import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import Hero from "../components/sections/Hero"

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen" >
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
      {/* <Footer /> */}
      </div>
    </>
  )
}

