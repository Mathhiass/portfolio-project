import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg[#121212] container mx-auto">
      <Navbar />
      <div className="container mt-24 py-4 px-12">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
