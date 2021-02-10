import logo from './logo.svg';
import './App.css';
import tachyons from 'tachyons';
import Footer from './Footer';
import Header from './Header';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div>
      <div class="flex items-center justify-center pa4 bg-washed-red navy">
        <svg class="w1" data-icon="info" viewBox="0 0 32 32">
          <title>info icon</title>
          <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"></path>
        </svg>
        <span class="lh-title ml3">Attention: Due to covid we are taking extra precaution and sanitation measures to carefully prepare your order.</span>
      </div>
    <Header />
    <About />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
