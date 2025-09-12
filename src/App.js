import logo from './logo.svg';
// import './App.css';
import HeroSection from './components/hero';
import ResumeBuilder from './components/resume-builder';
import GigaJobPortal from './components/jobportal';
import GigaPrescreener from './components/prescreen';
import GigaLMSDashboard from './components/lms';
import GigaSpace from './components/gigaspace';
import WhyChooseAndAiLab from './components/whychose';
import AILabSection from './components/ai.';

function App() {
  return (
    <div className="App">
      
        <HeroSection />
        <ResumeBuilder />
        <GigaJobPortal />
        <GigaLMSDashboard />
        <GigaSpace />
        <GigaPrescreener />
        <WhyChooseAndAiLab />
        <AILabSection />
    </div>
  );
}

export default App;
