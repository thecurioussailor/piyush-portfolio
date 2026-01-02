import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
export default function Home() {
  return (
    <div className="bg-[#e7e8d3] text-white">
      <Navbar />
      <Hero />
      <Experience />
      <Work />
    </div>
  );
}
