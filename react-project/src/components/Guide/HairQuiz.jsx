import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ResultCard from './ResultCard';

const questions = [
  {
    id: 1,
    question: "What is your main hair texture?",
    options: [
      { text: "Straight (1)", value: "Straight" },
      { text: "Wavy (2)", value: "Wavy" },
      { text: "Curly (3)", value: "Curly" },
      { text: "Coily (4)", value: "Coily" }
    ]
  },
  {
    id: 2,
    question: "How would you describe your hair thickness?",
    options: [
      { text: "Fine and flat", value: "Fine" },
      { text: "Medium / Normal", value: "Medium" },
      { text: "Thick and dense", value: "Thick" }
    ]
  },
  {
    id: 3,
    question: "How is your frizz level on a normal day?",
    options: [
      { text: "Rarely frizzy", value: "Low" },
      { text: "Sometimes, mostly high humidity", value: "Medium" },
      { text: "Very frizzy all the time", value: "High" }
    ]
  },
  {
    id: 4,
    question: "What is your scalp type?",
    options: [
      { text: "Oily, I need to wash often", value: "Oily" },
      { text: "Dry, prone to flakes", value: "Dry" },
      { text: "Normal, balanced", value: "Normal" }
    ]
  }
];

const resultsMap = {
  "Straight": { type: "Straight Hair (Type 1)", description: "Lacks natural curl, tends to get oily quickly as sebum travels down smoothly. Focus on lightweight products." },
  "Wavy": { type: "Wavy Hair (Type 2)", description: "Has an S-shape pattern. Tends to be prone to frizz. Focus on gentle hydration without weighing it down." },
  "Curly": { type: "Curly Hair (Type 3)", description: "Defined ringlets or corkscrews. Prone to dryness and breakage. Focus on deep moisture and defining products." },
  "Coily": { type: "Coily Hair (Type 4)", description: "Tight coils or zig-zag patterns. Most fragile and dry hair type. Focus on heavy hydration, oils, and gentle handling." }
};

const HairQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const savedResult = localStorage.getItem('hairQuizResult');
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
    // Determine based on the first answer (texture)
    const mainType = finalAnswers[0];
    
    const finalResult = resultsMap[mainType] || resultsMap["Straight"];
    setResult(finalResult);
    localStorage.setItem('hairQuizResult', JSON.stringify(finalResult));
  };

  const retakeQuiz = () => {
    setResult(null);
    setCurrentStep(0);
    setAnswers([]);
    localStorage.removeItem('hairQuizResult');
  };

  if (result) {
    return <ResultCard result={{...result, type: result.type}} type="Hair" onRetake={retakeQuiz} />;
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

export default HairQuiz;
