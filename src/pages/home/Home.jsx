import About from "../../components/about/About"
import Contact from "../../components/contact/Contact"
import Experience from "../../components/experience/Experience"
import Footer from "../../components/footer/Footer"
import Profile from "../../components/profile/Profile"
import Projects from "../../components/projects/Projects"
import Topbar from "../../components/topbar/Topbar"

// import "./home.css"

export default function Home() {
  return (
    <>
      <Topbar />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
