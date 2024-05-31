import React from 'react';

const Result = ({ score, totalQuestions, onRestart }) => {
  const percentage = ((score / totalQuestions) * 100).toFixed(2);

  return (
    <div className="result">
      <h2>Your Score</h2>
      <p>You scored {score} out of {totalQuestions} ({percentage}%)</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default Result;

