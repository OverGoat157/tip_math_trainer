export function generateExample() {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  return { num1, num2, correctAnswer: num1 + num2 };
}