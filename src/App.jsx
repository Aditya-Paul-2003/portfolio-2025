import LogoSection from "./components/LogoSection"
import NavBar from "./components/Navbar"
import ExperienceSection from "./sections/ExperienceSection"
import FeatureCards from "./sections/FeatureCards"
import ShowcaseSection from "./sections/ShowcaseSection"
import TechStack from "./sections/TechStack"
import Hero from "./sections/Hero"
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/Contact"


const App = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <ShowcaseSection/>
      <LogoSection/>
      <FeatureCards/>
      <ExperienceSection/>
      <TechStack/>
      <Testimonials/>
      <Contact/>
    </>
  )
}

export default App
