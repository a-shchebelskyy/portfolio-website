import Navbar from './components/navbar';
import Header from './components/sectionHeader';
import About from './components/sectionAbout';
import Projects from './components/sectionProjects';
import Contact from './components/sectionContact';
import Footer from './components/footer';

const App = () => {
  return (
    <main className="app">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
