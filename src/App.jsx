import LogoSection from "./components/LogoSection"
import NavBar from "./components/Navbar"
import ExperienceSection from "./ExperienceSection"
import FeatureCards from "./sections/FeatureCards"
import ShowcaseSection from "./sections/ShowcaseSection"
import TechStack from "./sections/TechStack"
import Hero from "./sections/Hero"

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
    </>
  )
}

export default App
