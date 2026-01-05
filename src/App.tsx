import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="bg-bg text-text min-h-screen">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
