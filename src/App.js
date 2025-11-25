import React, { useState, useEffect } from 'react';
import './App.css';
import MathExample from './components/MathExample';
import { generateExample } from './utils/generateExample';

function App() {
  const [example, setExample] = useState(generateExample());
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    const savedScore = localStorage.getItem('score');
    if (savedScore) {
      setScore(parseInt(savedScore, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('score', score);
  }, [score]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const answer = parseInt(userAnswer, 10);
    if (isNaN(answer)) {
      setMessage('Введите число!');
      return;
    }
    if (answer === example.correctAnswer) {
      setMessage('Правильно!');
      setScore(score + 1);
    } else {
      setMessage(`Неправильно! Правильный ответ: ${example.correctAnswer}`);
    }
    setUserAnswer('');
    setExample(generateExample());
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Тренажёр по математике: Сложение</h1>
        <p>Счёт: {score}</p>
        <MathExample
          example={example}
          userAnswer={userAnswer}
          setUserAnswer={setUserAnswer}
          handleSubmit={handleSubmit}
          message={message}
        />
      </header>
    </div>
  );
}

export default App;