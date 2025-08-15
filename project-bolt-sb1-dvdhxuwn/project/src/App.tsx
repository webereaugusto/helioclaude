import React from 'react';
import Hero from './components/Hero';
import Procedure from './components/Procedure';
import Process from './components/Process';
import Results from './components/Results';
import Doctor from './components/Doctor';
import WhyChoose from './components/WhyChoose';
import Clinic from './components/Clinic';
import Investment from './components/Investment';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Procedure />
      <Process />
      <Results />
      <Doctor />
      <WhyChoose />
      <Clinic />
      <Investment />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;