import React, { useState } from 'react';


const QuestionBox = ({ question, questionNumber, totalQuestions, onAnswer }) => {
  const [highlighted, setHighlighted] = useState(false);

  const handleHighlight = () => {
    setHighlighted(true);
  };

  const handleRemoveHighlight = () => {
    setHighlighted(false);
  };

  return (
    <div className="question-box">
      <div className="question-header">
        Question: {questionNumber} out of {totalQuestions}
      </div>
      <div className={highlighted ? 'question-text highlighted' : 'question-text'}>
        {question.text}
      </div>
      <div className="options">
        {question.options.map((option) => (
          <button key={option.id} onClick={() => onAnswer(option.isCorrect)}>
            {option.text}
          </button>
        ))}
      </div>
      <div className="highlight-buttons">
        <button onClick={handleHighlight}>Highlight</button>
        <button onClick={handleRemoveHighlight}>Remove Highlight</button>
      </div>
    </div>
  );
};

export default QuestionBox;
