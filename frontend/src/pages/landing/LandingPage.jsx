/*
   Main Landing page :
   combines all sections 
   -Header
   -Hero
   -Features
   -Footer
   all texts are static from translation files
 */

   // TODO: add CTA section later
import Hero from "./Hero";
import Features from "./Features";
import Header from "./Header";
import Footer from "./Footer";
import IconButton from "../../components/UI/IconButton";

export default function Landing() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Footer />

       <IconButton>Scroll to top</IconButton>
    </>
  );
}