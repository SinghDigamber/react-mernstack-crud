import React, { useEffect, useState } from "react";
import axios from "axios";

function CreateStudent() {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    rollno: "",
  });

  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/students/create-student", userForm)
      .then((res) => {
        console.log(res.data);
        setUserForm({
          name: "",
          email: "",
          rollno: "",
        });
      });
  };

  useEffect(() => {}, []);

  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={userForm.name}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              value={userForm.email}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Roll no.</label>
            <input
              type="text"
              className="form-control"
              name="rollno"
              id="rollno"
              value={userForm.rollno}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateStudent;
