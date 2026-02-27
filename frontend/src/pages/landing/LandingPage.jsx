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
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import CTA from "./sections/CTA";

export default function LandingPage({ message }) {
  return (
    <>
      <Header />

      <main className="pt-20">
        <h2>{message}</h2>

        <Hero />
        <Features />
        <CTA/>

      </main>

      <Footer />
    </>
  );
}
