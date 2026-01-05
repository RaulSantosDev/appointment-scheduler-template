import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

export default function Schedule() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-primary">
          Agenda tu cita
        </h1>
      </main>
      <Footer />
    </>
  )
}
