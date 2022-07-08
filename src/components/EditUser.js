import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { nanoid } from "@reduxjs/toolkit";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPostByIdQuery, useUpdatePostMutation } from '../services/post';

const EditUser = () => {
  const responseInfo = useGetPostByIdQuery()
  const [updatePost] = useUpdatePostMutation();
  const modelId = nanoid();
  const [state, setState] = useState({
    userId: modelId,
    id: "",
    name: "",
    age: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState(''); 
  let {id} = useParams();
  const {user} = useSelector((state) => state.data);
  let navigate = useNavigate();

  const { name, age, email, phone } = state;

  useEffect(() =>{
    responseInfo(id);
  }, []);

  useEffect(() => {
    updatePost()
  }, []);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({...state, [name]: value});
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!name || !age || !email || !phone){
        setError("Please give some input all input field");
    }else{
        updatePost(state, id);
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
      <h2>Edit User</h2>
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
          label="Name"
          value={name || ""}
          name = "name"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Age"
          value={age || ""}
          name = "age"
          type="number"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Email"
          value={email || ""}
          name = "email"
          type="email"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Phone"
          value={phone || ""}
          name = "phone"
          type="number"
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
          Update
        </Button>
      </FormControl>
    </div>
  );
};

export default EditUser;
