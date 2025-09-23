// import logo from './logo.svg';
// import './App.css';


// import HeroSection from './components/hero';
// import ResumeBuilder from './components/resume-builder';
// import GigaJobPortal from './components/jobportal';
// import GigaPrescreener from './components/prescreen';
// import GigaLMSDashboard from './components/lms';
// import GigaSpace from './components/gigaspace';
// import WhyChooseAndAiLab from './components/whychose';
// import AILabSection from './components/ai';
// import GigaLabsFooter from './components/footer1';
// import GigaLabsBottom from './components/footer2';
// import Innovations from './components/card';

import Navbar from './components/Navbar';
import HeroSection1 from './components/heroResp.jsx';
import ResumeBuilder1 from './components/resumeResp.jsx';
import GigaJobPortal1 from './components/jobResp.jsx';
import GigaLMSDashboard1 from './components/lmsResp.jsx';
import GigaSpace1 from './components/gigaspaceResp.jsx';
import GigaPrescreener1 from './components/prescreenResp.jsx';
import Innovations1 from './components/cardResp.jsx';
import WhyChooseAndAiLab1 from './components/whychoseResp.jsx';
import AiLabSection1 from './components/aiResp.jsx';
import GigaLabsFooter1 from './components/footer1Resp.jsx';
import GigaLabsBottom1 from './components/footer2Resp.jsx';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection1/>
      <ResumeBuilder1/>
      <GigaJobPortal1/>
      <GigaLMSDashboard1/>
      <GigaSpace1/>
      <GigaPrescreener1/>
      <Innovations1/>
      <WhyChooseAndAiLab1/>
      <AiLabSection1/>
      <GigaLabsFooter1/>
      <GigaLabsBottom1/>
      
{/*
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
      <Innovations />
      <WhyChooseAndAiLab />
      <AILabSection />
      <GigaLabsFooter/>
      <GigaLabsBottom/> */}
      
    </div>
  );
}

export default App;
