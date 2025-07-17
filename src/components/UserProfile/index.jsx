import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import ProfileHeader from './ProfileHeader';
import ProfileDetails from './ProfileDetails';

const UserProfile = () => {
  const { user } = useContext(AppContext);
  
  return (
    <div className="profile">
      <ProfileHeader />
      <ProfileDetails />
      <p>Поточна тема: {user.theme}</p>
    </div>
  );
};

export default UserProfile;