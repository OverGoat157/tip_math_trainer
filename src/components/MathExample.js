import React from 'react';

const MathExample = ({ example, userAnswer, setUserAnswer, handleSubmit, message }) => {
  return (
    <>
      <div className="example">
        {example.num1} + {example.num2} = ?
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Ваш ответ"
        />
        <button type="submit">Проверить</button>
      </form>
      <p className={message.startsWith('Правильно') ? 'success' : 'error'}>{message}</p>
    </>
  );
};

export default MathExample;