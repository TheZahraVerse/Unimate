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

export default function LandingPage({ message }) {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#2563eb' }}>Hello from Inertia Django !</h1>
      <p>Message from backend: {message || 'No message'}</p>

      <hr style={{ margin: '30px 0' }} />

      <h2>testing sections</h2>
      <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px 0' }}>
        <h3>Header</h3>
        {/* <Header /> */}
      </div>

      <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px 0' }}>
        <h3>Hero</h3>
        {/* <Hero /> */}
      </div>

      <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px 0' }}>
        <h3>Features</h3>
        {/* <Features /> */}
      </div>

      <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px 0' }}>
        <h3>Footer</h3>
        {/* <Footer /> */}
      </div>
    </div>
  )
}