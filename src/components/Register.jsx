import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import axios from "axios";

const Register = () => {

  const [fname, setFName] = useState("");
  const [file, setFile] = useState("");

  const navigate = useNavigate();

  const handleProfileName = (e) => {
    const { value } = e.target;
    setFName(value);
  }

  const handleAvatar = (e) => {
    setFile(e.target.files[0]);
  }

  const submitUserData = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("photo", file);
    formData.append("fname", fname);

    const config = {
      headers : {
        "Content-Type" : "multipart/form-data"
      }
    };

    const { data } = await axios.post("/register", formData, config);

    if(data.status === 401 || !data){
      console.log("Error while calling POST API");
    }else{
      navigate("/");
    }
  }

  return (
    <div className="container mt-3">
      <h2 className="text-center text-uppercase">upload your profile</h2>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Profile Name</Form.Label>
        <Form.Control type="text" placeholder="Your Profile Name" name="fname" onChange={handleProfileName} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your Avatar</Form.Label>
        <Form.Control type="file" name="photo" onChange={handleAvatar} />
      </Form.Group>
      <button className="btn" type="submit" onClick={submitUserData} style={{width: "6rem", backgroundColor: "#F9ED69"}}>
        Add
      </button>
    </Form>
    </div>
  );
}

export default Register;