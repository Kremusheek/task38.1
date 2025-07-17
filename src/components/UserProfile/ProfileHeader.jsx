import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';

const ProfileHeader = () => {
  const { user } = useContext(AppContext);
  
  return <h2>Профiль: {user.name}</h2>;
};

export default ProfileHeader;