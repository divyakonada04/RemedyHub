import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCcw, CheckCircle } from 'lucide-react';
import StepFlow from './StepFlow';

const ResultCard = ({ result, type, onRetake }) => {
  return (
    <motion.div 
      className="result-card"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <motion.div 
        className="result-icon"
        initial={{ y: -30, rotate: -90 }}
        animate={{ y: 0, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <CheckCircle size={40} />
      </motion.div>
      
      <motion.h2 
        className="result-title"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Your {type} Type is: {result.type}
      </motion.h2>
      <motion.p 
        className="result-desc"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {result.description}
      </motion.p>
      
      <motion.div 
        style={{ marginTop: '40px', marginBottom: '40px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h3 style={{ color: '#2e7d32', marginBottom: '20px' }}>Your Personalized Routine</h3>
        <StepFlow />
      </motion.div>

      <motion.div 
        className="action-buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.button 
          className="action-btn-secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRetake}
        >
          <RefreshCcw size={18} style={{ marginRight: '8px' }} />
          Retake Quiz
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ResultCard;
