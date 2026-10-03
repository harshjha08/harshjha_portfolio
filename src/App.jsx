import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { AboutPage, ProjectsPage, ServicesPage, CertificatesPage, ContactPage, ProjectDetail, NotFound } from './pages/Pages'
export default function App() {
  const { pathname } = useLocation()
  return (<>
    <a className="skip" href="#main">Skip to content</a>
    <Navbar />
    <main id="main" key={pathname} className="route">
      <Routes>
        <Route path="/" element={<Home />} /><Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} /><Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/services" element={<ServicesPage />} /><Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/contact" element={<ContactPage />} /><Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </>)
}
