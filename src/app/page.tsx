import Header from "@/components/Header";
import About from "@/components/About";
import Packages from "@/components/Packages";
import Stats from "@/components/Stats";
import Banner from "@/components/Banner";
import Gallery from "@/components/gallery";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header/>
      <Banner />
      <Packages />
      <Stats />
      <About />
      <Gallery />
      <Testimonials />
    </>
  );
}
