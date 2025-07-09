import React, { useEffect, useState } from "react";
import axios from "axios";

const UserFetcher = ({ userId }) => {
  const [user, setUser] = useState(null);          
  const [loading, setLoading] = useState(false);   
  const [error, setError] = useState(null);        

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);   
      setError(null);     

      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        setUser(response.data);
      } catch (err) {
        setError("Помилка при завантаженні користувача");
      } finally {
        setLoading(false); 
      }
    };

    fetchUser(); 
  }, [userId]); 

  if (loading) return <p>Завантаження даних...</p>;
  if (error) return <p>{error}</p>;
  if (!user) return null;

  return (
    <div>
      <h2>Інформація про користувача</h2>
      <p><strong>Ім’я:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Місто:</strong> {user.address.city}</p>
    </div>
  );
};

export default UserFetcher;
