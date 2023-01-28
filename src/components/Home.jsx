import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import moment from "moment";
import { toast } from "react-toastify";

const Home = () => {
  const [data, setData] = useState([]);

  const getUser = async () => {
    const { data } = await axios.get("/getdata", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (data.status === 401 || !data) {
      toast.error("Something went wrong", {
        position: toast.POSITION.TOP_CENTER
      });
    } else {
      setData(data.users);
    }
  };

  const deleteUser = async (id) => {
    const { data } = await axios.delete(`/${id}`, {
      headers : {
        "Content-Type" : "application/json"
      }
    });
    if(data.status === 401 || !data){
      toast.error("Something went wrong", {
        position: toast.POSITION.TOP_CENTER
      });
    }else{
      toast.success("User Deleted Successfully", {
        position: toast.POSITION.TOP_CENTER
      });
      getUser();
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container mt-3">
      <h2 className="text-uppercase text-center">Mern Image Upload Project</h2>
      <div className="row my-4">
        {data.length > 0
          ? data.map((item) => (
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex" key={item._id} >
                <Card style={{ width: "16rem", height: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={`/uploads/${item.imgpath}`}
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      textAlign: "center",
                      margin: "auto",
                    }}
                    className="mt-2"
                  />
                  <Card.Body className="text-center">
                    <Card.Title>Name: {item.fname}</Card.Title>
                    <Card.Text>Created At: {moment(item.date).format("L")}</Card.Text>
                    <Button variant="danger" onClick={ () => deleteUser(item._id) } >Delete</Button>
                  </Card.Body>
                </Card>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Home;
