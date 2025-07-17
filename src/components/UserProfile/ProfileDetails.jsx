import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';

const ProfileDetails = () => {
  const { user } = useContext(AppContext);
  
  return (
    <div>
      <p>Електронна пошта {user.email}</p>
    </div>
  );
};

export default ProfileDetails;