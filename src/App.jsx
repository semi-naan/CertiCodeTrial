import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Classes from './components/Classes.jsx';
import Schedule from './components/Schedule.jsx';
import Gallery from './components/Gallery.jsx';
import Testimonial from './components/Testimonial.jsx';
import Blog from './components/Blog.jsx';
import Newsletter from './components/Newsletter.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Hero />
      <About />
      <Classes />
      <Schedule />
      <Gallery />
      <Testimonial />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
}
