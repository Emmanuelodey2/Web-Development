import Hero from '../components/Hero'
import Footer from '../components/Footer'
import CursorFollower from "../components/Cursor";
import Services from "../components/Services";
import Features from "../components/Features";
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <CursorFollower />
      <Hero />
      <Services />
      <Features />
      <Footer />
    </div>
  );
}
