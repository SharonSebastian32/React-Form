import React from "react";
import { useState } from "react";
const SignupCard = () => {
  const [formData, setformData] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setformData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault(); //to prevent page refreshing
    console.log(formData, "The input data");
  };

  return (
    <div className="signupcard">
      <h1>Registration Form</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">First Name</label>
        <input
          type="text"
          name="fName"
          value={formData.fName}
          placeholder="First Name"
          onChange={(event) => handleInputChange(event)}
        />

        <label htmlFor="">Last Name</label>
        <input
          type="text"
          name="lName"
          value={formData.lName}
          placeholder="Last Name"
          onChange={(event) => handleInputChange(event)}
        />

        <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={(event) => handleInputChange(event)}
        />

        <label htmlFor="">Password</label>
        <input
          type="text"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={(event) => handleInputChange(event)}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupCard;
