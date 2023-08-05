import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";

export default function RootPage() {
  return (
    <main className="overflow-hidden">
      <Home />
      <About />
      <Footer />
    </main>
  );
}
