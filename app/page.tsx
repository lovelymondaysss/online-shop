import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import Store from "./Store";
import Carousel from "./Carousel";
import Cart from "./Cart";

export default function Home() {
  return (
    <section className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Navbar />
      <Carousel />
      <Store />
      <About />
      <Footer />

      <Cart />
    </section>
  );
}
