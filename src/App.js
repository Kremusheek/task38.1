import React, { useState } from "react";
import UserFetcher from "./components/UserFetcher";

const App = () => {
  const [userId, setUserId] = useState(1); // Стан для ID користувача

  return (
    <div>
      <h1>Користувачі</h1>
      <label>Введіть ID користувача: </label>
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(Number(e.target.value))}
        min="1"
        max="10"
      />
      <UserFetcher userId={userId} />
    </div>
  );
};

export default App;
