import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplets, Sun, Wind, CloudRain, Star, Sparkles, Scissors, Activity } from 'lucide-react';
import SkinQuiz from '../components/Guide/SkinQuiz';
import HairQuiz from '../components/Guide/HairQuiz';
import './GuidePage.css';

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

const GuidePage = () => {
  const [activeQuiz, setActiveQuiz] = useState('skin');

  return (
    <div className="guide-page-container">
      
      {/* 1. SKIN TYPE GUIDE */}
      <section className="guide-section">
        <motion.h2 
          className="guide-section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Skin Type Guide
        </motion.h2>
        
        <motion.div 
          className="guide-cards-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skinTypes.map((type) => (
            <motion.div 
              key={type.id} 
              className="guide-card-premium"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 15px 35px rgba(76, 175, 80, 0.15)' }}
            >
              <div className="guide-card-icon">{type.icon}</div>
              <h3>{type.title}</h3>
              <p><strong>Description:</strong> {type.desc}</p>
              <p><strong>Common problems:</strong> {type.problems}</p>
              
              <div className="guide-step-list">
                <p style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '0.9rem', color: '#2e7d32' }}>Care Routine</p>
                {type.routine.map((step, idx) => (
                  <div key={idx} className="guide-step-item">
                    <span className="guide-step-number">{idx + 1}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 2. HAIR TYPE GUIDE */}
      <section className="guide-section" style={{ marginTop: '90px' }}>
        <motion.h2 
          className="guide-section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Hair Type Guide
        </motion.h2>
        
        <motion.div 
          className="guide-cards-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {hairTypes.map((type) => (
            <motion.div 
              key={type.id} 
              className="guide-card-premium"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 15px 35px rgba(76, 175, 80, 0.15)' }}
            >
              <div className="guide-card-icon">{type.icon}</div>
              <h3>{type.title}</h3>
              <p><strong>Characteristics:</strong> {type.desc}</p>
              <p><strong>Common issues:</strong> {type.problems}</p>
              
              <div className="guide-step-list">
                <p style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '0.9rem', color: '#2e7d32' }}>Care Routine</p>
                {type.routine.map((step, idx) => (
                  <div key={idx} className="guide-step-item">
                    <span className="guide-step-number">{idx + 1}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* QUIZ SECTION (Sections 3 & 4) */}
      <section className="guide-section" style={{ marginTop: '90px' }}>
         <motion.h2 
          className="guide-section-title"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Find Your Type
        </motion.h2>
        
        <div className="quiz-tabs">
          <button 
            className={`quiz-tab ${activeQuiz === 'skin' ? 'active' : ''}`}
            onClick={() => setActiveQuiz('skin')}
          >
            Skin Type Quiz
          </button>
          <button 
            className={`quiz-tab ${activeQuiz === 'hair' ? 'active' : ''}`}
            onClick={() => setActiveQuiz('hair')}
          >
            Hair Type Quiz
          </button>
        </div>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           key={activeQuiz}
           transition={{ duration: 0.4 }}
        >
          {activeQuiz === 'skin' ? <SkinQuiz /> : <HairQuiz />}
        </motion.div>
      </section>

    </div>
  );
};

export default GuidePage;
