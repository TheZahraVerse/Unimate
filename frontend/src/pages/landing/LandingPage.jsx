/*
   Main Landing page :
   combines all sections 
   -Header
   -Hero
   -Features
   -Footer
   all texts are static from translation files
 */

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
        <p>TODO: <br/>create Modal for pop-up messages /
           choose switch animation for auth /
           setup layout for student dashboard /
           setup dark mode / translate static texts
        </p>

        <Hero />
        <Features />
        <CTA/>

      </main>

      <Footer />
    </>
  );
}
