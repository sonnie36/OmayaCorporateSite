import React from 'react'
import {Route ,Routes} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import AboutUs from './pages/AboutUs/AboutUs'
import Services from './pages/Services/Services'
import TestimonialsP from './pages/Testimonials/TestimonialsP'
import BlogPage from './pages/Blog/BlogPage'
import Contact from './pages/ContactUs.jsx/Contact'
import BlogDetails from './pages/BlogDetailsP/BlogDetails'
import ServiceDetailsP from './pages/ServiceDetailsPage/ServiceDetailsP'
import IndustryFocus from './pages/Industry/IndustryFocus'




const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path='/testimonials' element={<TestimonialsP/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='blog/:id' element={<BlogDetails/>}/>
        <Route path='service/:serviceId' element={<ServiceDetailsP/>}/>
        <Route path='/industry' element={<IndustryFocus/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App