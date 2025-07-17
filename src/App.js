import UserProfile from './components/UserProfile';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
    <div className="app">
      <h1>Демонстрацiя React Context</h1>
      <UserProfile />
      <ThemeSwitcher />
    </div>
  );
}

export default App;