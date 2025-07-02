import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Становий компонент (useState)</h2>
      <p>Лічильник: {count}</p>
      <button onClick={() => setCount(count + 1)}>Збільшити</button>
      <button onClick={() => setCount(count - 1)}>Зменшити</button>
    </div>
  );
};

export default Counter;
