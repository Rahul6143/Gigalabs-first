import logo from './logo.svg';
// import './App.css';

import Navbar from './components/Navbar';
import HeroSection from './components/hero';
import ResumeBuilder from './components/resume-builder';
import GigaJobPortal from './components/jobportal';
import GigaPrescreener from './components/prescreen';
import GigaLMSDashboard from './components/lms';
import GigaSpace from './components/gigaspace';
import WhyChooseAndAiLab from './components/whychose';
import AILabSection from './components/ai';
import GigaLabsFooter from './components/footer1';
import GigaLabsBottom from './components/footer2';

function App() {
  return (
    <div className="App">
      <Navbar />

      <section id="hero" >
        <HeroSection />
      </section>

      <section id="resume-builder" >
        <ResumeBuilder />
      </section>

      <section id="jobportal" >
        <GigaJobPortal />
      </section>

      <section id="lms" >
        <GigaLMSDashboard />
      </section>

      <section id="gigaspace" >
        <GigaSpace />
      </section>

      <section id="prescreen" >
        <GigaPrescreener />
      </section>

      <WhyChooseAndAiLab />
      <AILabSection />
      <GigaLabsFooter/>
      <GigaLabsBottom/>
    </div>
  );
}

export default App;
