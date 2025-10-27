import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import CustomerReviews from './components/CustomerReviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Location from './components/Location'
import VideoSection from './components/VideoSection'

function App() {
  return (
    <main>
      <section>
        <Navbar  />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <VideoSection />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <WhyChooseUs />
      </section>
      <section>
        <CustomerReviews />
      </section>
      <section>
        <Location />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
      
    </main>
  )
}

export default App
