import { useRef } from "react";

export function UncontrolledForm() {
  const nameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uncontrolled input value:", nameRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Uncontrolled Form</h2>
      <input type="text" ref={nameRef} placeholder="Enter your name" />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
