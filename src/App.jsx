import { Outlet } from 'react-router-dom'
import Header from './components/Header';
import Nav from './components/Navigation';
import Footer from './components/Footer';
import AboutMe from './components/About';


export default function App() {
  return (
    <>
      <header>
        <Header />
        <Nav />
      </header>
      <main>
        <AboutMe />
        <Footer />
        <Outlet />
      </main>
    </>
  )
}
