import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { nanoid } from "@reduxjs/toolkit";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useCreatePostMutation } from '../services/post';

const AddUser = () => {
  const [createPost] = useCreatePostMutation()
  const modelId = nanoid();
  const [state, setState] = useState({
    userId: modelId,
    id: "",
    first_name: "",
    last_name: "",
    age: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    company: "",
    job: "",
  });
  const [error, setError] = useState(''); 

  let navigate = useNavigate();

  const { id, first_name, last_name, age, email, phone, country, city, company, job } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({...state, [name]: value});
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!id || !first_name || !last_name || !age || !email || !phone || !country || !city || !company || !job ){
        setError("Please give some input all input field");
    }else{
        createPost(state);
        navigate("/");
        setError("");
    }
  }

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        style={{ width: "100px", marginTop: "20px" }}
        onClick={() => navigate("/")}
      >
        Go Back
      </Button>
      <h2>Add User</h2>
      {error && <h6 style={{ color: "red" }}>{error}</h6>}
      <FormControl
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "35ch" } }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Id"
          value={id}
          name = "id"
          type="number"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="First Name"
          value={first_name}
          name = "first_name"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Last Name"
          value={last_name}
          name = "last_name"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Age"
          value={age}
          name = "age"
          type="number"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Email"
          value={email}
          name = "email"
          type="email"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Phone"
          value={phone}
          name = "phone"
          type="number"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Country"
          value={country}
          name = "country"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="City"
          value={city}
          name = "city"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Company"
          value={company}
          name = "company"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Job"
          value={job}
          name = "job"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ width: "100px" }}
          onChange={handleInputChange}
        >
          Submit
        </Button>
      </FormControl>
    </div>
  );
};

export default AddUser;
