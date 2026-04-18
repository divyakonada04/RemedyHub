import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplets, Sun, Wind, CloudRain, Star, Sparkles, Scissors, Activity } from 'lucide-react';
import './GuidePage.css';
import SkinQuiz from '../components/Guide/SkinQuiz';
import HairQuiz from '../components/Guide/HairQuiz';

const skinTypes = [
  { id: 1, title: 'Oily Skin', desc: 'Produces excess oil, leading to shine and potential breakouts.', problems: 'Acne, large pores, shiny T-zone.', routine: ['Double Cleanse', 'BHA Exfoliant', 'Oil-free Moisturizer', 'Gel Sunscreen'], icon: <Droplets size={24} /> },
  { id: 2, title: 'Dry Skin', desc: 'Lacks moisture, can feel tight, rough, or flaky.', problems: 'Flakiness, tightness, dullness, early wrinkles.', routine: ['Cream Cleanser', 'Hyaluronic Acid', 'Rich Cream', 'Facial Oil'], icon: <Sun size={24} /> },
  { id: 3, title: 'Combination', desc: 'Mix of oily T-zone and dry/normal cheeks.', problems: 'Shine on T-zone, dry patches elsewhere.', routine: ['Gentle Cleanser', 'Targeted Treatment', 'Lightweight Lotion', 'Fluid Sunscreen'], icon: <Wind size={24} /> },
  { id: 4, title: 'Sensitive', desc: 'Easily irritated, prone to redness and reactions.', problems: 'Redness, burning, stinging, reactive breakouts.', routine: ['Micellar Water', 'Centella Serum', 'Barrier Cream', 'Mineral Sunscreen'], icon: <CloudRain size={24} /> },
  { id: 5, title: 'Normal Skin', desc: 'Well-balanced, not too oily or too dry.', problems: 'Occasional dullness or minor blemishes.', routine: ['Basic Cleanser', 'Vitamin C', 'Daily Moisturizer', 'Broad Spectrum SPF'], icon: <Star size={24} /> },
];

const hairTypes = [
  { id: 1, title: 'Straight Hair', desc: 'Lies flat from roots to tips without any curl pattern.', problems: 'Gets oily quickly, lacks volume.', routine: ['Volumizing Shampoo', 'Lightweight Conditioner', 'Dry Shampoo', 'Heat Protectant'], icon: <Wind size={24} /> },
  { id: 2, title: 'Wavy Hair', desc: 'Creates loose S-shapes or bends.', problems: 'Frizz, lack of definition, flat roots.', routine: ['Sulfate-free Cleanser', 'Leave-in Conditioner', 'Mousse', 'Diffuser'], icon: <Activity size={24} /> },
  { id: 3, title: 'Curly Hair', desc: 'Forms defined loops and ringlets.', problems: 'Dryness, frizz, tangles, shrinkage.', routine: ['Co-wash', 'Deep Conditioner', 'Curl Cream', 'Gel / Custard'], icon: <Sparkles size={24} /> },
  { id: 4, title: 'Coily Hair', desc: 'Tight curls, zig-zags, most fragile texture.', problems: 'Extreme dryness, breakage, tangles.', routine: ['Gentle Shampoo', 'Thick Mask', 'LOC Method (Liquid, Oil, Cream)', 'Protective Styling'], icon: <Scissors size={24} /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

function GuidePage() {
  const [activeQuiz, setActiveQuiz] = useState("skin");

  return (
    <div className="guide-page-container">

      {/* Skin Guide */}
      <h2>Skin Type Guide</h2>
      <div className="guide-cards-grid">
        {skinTypes.map((type) => (
          <div key={type.id} className="guide-card">
            <h3>{type.title}</h3>
            <p><b>Description:</b> {type.desc}</p>
            <p><b>Problems:</b> {type.problems}</p>

            <p><b>Routine:</b></p>
            <ul>
              {type.routine.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Hair Guide */}
      <h2>Hair Type Guide</h2>
      <div className="guide-cards-grid">
        {hairTypes.map((type) => (
          <div key={type.id} className="guide-card">
            <h3>{type.title}</h3>
            <p><b>Description:</b> {type.desc}</p>
            <p><b>Problems:</b> {type.problems}</p>

            <p><b>Routine:</b></p>
            <ul>
              {type.routine.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>



      {/* Quiz Section */}
      <h2>Find Your Type</h2>

      <div className="quiz-tabs">
        <button
          className={`quiz-tab ${activeQuiz === "skin" ? "active" : ""}`}
          onClick={() => setActiveQuiz("skin")}
        >
          Skin Quiz
        </button>

        <button
          className={`quiz-tab ${activeQuiz === "hair" ? "active" : ""}`}
          onClick={() => setActiveQuiz("hair")}
        >
          Hair Quiz
        </button>
      </div>

      <div>
        {activeQuiz === "skin" ? <SkinQuiz /> : <HairQuiz />}
      </div>

    </div>
  );
}

export default GuidePage;