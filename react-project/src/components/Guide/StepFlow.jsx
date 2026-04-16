import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const steps = [
  { title: "Cleanse", desc: "Remove impurities" },
  { title: "Treat", desc: "Target specific concerns" },
  { title: "Moisturize", desc: "Hydrate & barrier" },
  { title: "Protect", desc: "Sun & environmental" }
];

const StepFlow = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 1200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="step-flow-container">
      <div className="step-flow-line">
        <motion.div 
          className="step-flow-progress"
          initial={{ width: "0%" }}
          animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </div>
      
      {steps.map((step, index) => (
        <motion.div 
          key={index}
          className={`step-node ${index <= activeStep ? 'active' : ''}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.3, duration: 0.5 }}
        >
          <motion.div 
            className="step-circle"
            whileHover={{ scale: 1.1 }}
            animate={index === activeStep ? { scale: [1, 1.15, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            {index + 1}
          </motion.div>
          <div className="step-title">{step.title}</div>
          <div className="step-desc">{step.desc}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default StepFlow;
