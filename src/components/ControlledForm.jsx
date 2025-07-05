import { useState } from "react";

export function ControlledForm() {
  const [formData, setFormData] = useState({
    name: "",
    agree: false,
    role: "user"
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Controlled form data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Form</h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <br />
      <input
        type="checkbox"
        name="agree"
        checked={formData.agree}
        onChange={handleChange}
      />{" "}
      Agree to terms
      <br />
      <select name="role" value={formData.role} onChange={handleChange}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
