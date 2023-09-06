import { Outlet } from 'react-router-dom'
import Header from './components/Header';
import Nav from './components/NavBar';
import Footer from './components/Footer';
import './App.css'; 



export default function App() {
  return (
    <>
        <Header />
        <Nav />
        <main>
          <Outlet />
        </main>
        <Footer />
    </>
  )
}
