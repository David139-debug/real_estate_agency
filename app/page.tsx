import Categories from "./components/Landing/Categories";
import Companies from "./components/Landing/Companies";
import Discover from "./components/Landing/Discover";
import Experts from "./components/Landing/Experts";
import Featured from "./components/Landing/Featured";
import Footer from "./components/Landing/Footer";
import Hero from "./components/Landing/Hero";
import Homes from "./components/Landing/Homes";
import Luxury from "./components/Landing/Luxury";
import Navbar from "./components/Landing/Navbar";
import Testemonials from "./components/Landing/Testemonials";
import { auth } from "@/auth";

export default async function Home() {

  const session = await auth();

  return (
    <>
      <Navbar  session={session} />
      <Hero />
      <Categories />
      <Homes />
      <Luxury />
      <Companies />
      <Featured />
      <Testemonials />
      <Experts />
      <Discover />
      <Footer />
    </>
  );
}
