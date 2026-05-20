import Hero from './components/Hero';
import Mission from './components/Mission';
import WhatYoureProbablyDoingRightNow from './components/WhatYoureProbablyDoingRightNow';
import Product3D from './components/Product3D';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <LanguageSwitcher />
      <Hero />
      <Mission />
      <WhatYoureProbablyDoingRightNow />
      <Product3D />
      <Footer />
    </div>
  );
}
