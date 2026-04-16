import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ResultCard from './ResultCard';

const questions = [
  {
    id: 1,
    question: "How does your skin feel after washing?",
    options: [
      { text: "Tight and dry", value: "Dry" },
      { text: "Shiny and greasy", value: "Oily" },
      { text: "Tight in some areas, shiny in others", value: "Combination" },
      { text: "Comfortable and balanced", value: "Normal" }
    ]
  },
  {
    id: 2,
    question: "Do you get acne often?",
    options: [
      { text: "Rarely or never", value: "Normal" },
      { text: "Yes, quite often", value: "Oily" },
      { text: "Only in the T-zone", value: "Combination" },
      { text: "Sometimes, mainly red bumps", value: "Sensitive" }
    ]
  },
  {
    id: 3,
    question: "Is your skin sensitive to products?",
    options: [
      { text: "Yes, it gets red and irritated easily", value: "Sensitive" },
      { text: "Sometimes, depending on the product", value: "Combination" },
      { text: "No, I rarely react to products", value: "Normal" },
      { text: "No, but it needs a lot of moisture", value: "Dry" }
    ]
  }
];

const resultsMap = {
  "Dry": { type: "Dry Skin", description: "Your skin lacks oil. It focuses on deep hydration, gentle cleansing, and restoring the skin barrier." },
  "Oily": { type: "Oily Skin", description: "Your skin produces excess sebum. Your routine should focus on oil control, exfoliation, and lightweight hydration." },
  "Combination": { type: "Combination Skin", description: "You have a mix of oily and dry areas. It needs balanced care, treating the T-zone and cheeks accordingly." },
  "Normal": { type: "Normal Skin", description: "Your skin is well-balanced. Your routine focuses on maintenance, protection, and anti-aging." },
  "Sensitive": { type: "Sensitive Skin", description: "Your skin is prone to irritation. It requires soothing ingredients, fragrance-free products, and minimal harsh actives." }
};

const SkinQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const savedResult = localStorage.getItem('skinQuizResult');
    if (savedResult) {
      setResult(JSON.parse(savedResult));
    }
  }, []);

  const handleOptionSelect = (value) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers) => {
    // Determine the most frequent answer
    const counts = {};
    let maxFreq = 0;
    let mainType = finalAnswers[0];
    
    for (const ans of finalAnswers) {
      counts[ans] = (counts[ans] || 0) + 1;
      if (counts[ans] > maxFreq) {
        maxFreq = counts[ans];
        mainType = ans;
      }
    }
    
    // If sensitive was selected for product sensitivity, often it overrides
    if (finalAnswers[2] === "Sensitive") {
      mainType = "Sensitive";
    }

    const finalResult = resultsMap[mainType] || resultsMap["Normal"];
    setResult(finalResult);
    localStorage.setItem('skinQuizResult', JSON.stringify(finalResult));
  };

  const retakeQuiz = () => {
    setResult(null);
    setCurrentStep(0);
    setAnswers([]);
    localStorage.removeItem('skinQuizResult');
  };

  if (result) {
    return <ResultCard result={result} type="Skin" onRetake={retakeQuiz} />;
  }

  const progressPercentage = ((currentStep) / questions.length) * 100;

  return (
    <div className="quiz-container">
      <div className="quiz-progress-bar">
        <div 
          className="quiz-progress-fill" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="quiz-question">{questions[currentStep].question}</h3>
          
          <div className="quiz-options">
            {questions[currentStep].options.map((option, index) => (
              <motion.button
                key={index}
                className="quiz-option-btn"
                onClick={() => handleOptionSelect(option.value)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{option.text}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SkinQuiz;
