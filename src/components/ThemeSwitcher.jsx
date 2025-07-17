import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const ThemeSwitcher = () => {
  const { user, updateUser } = useContext(AppContext);
  
  const toggleTheme = () => {
    updateUser({ 
      theme: user.theme === 'light' ? 'dark' : 'light' 
    });
  };

  return (
    <button onClick={toggleTheme}>
      Змiнити тему (зараз: {user.theme})
    </button>
  );
};

export default ThemeSwitcher;