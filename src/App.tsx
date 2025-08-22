import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_BASE_URL = "https://libelectric.bamboohr.com/api/v1"; // Replace with your API's base URL
const API_KEY = "fd06e120cf5f78c5460429dc9c1b81ad51331420"; // Replace with your actual API key or token

function App() {
  const [data, setData] = useState([]);

  const instance = axios.create({
    baseURL: `${API_BASE_URL}`,
    // Replace this with your API's base URL https://libelectric.bamboohr.com/api/v1/employees/directory
    headers: {
      Authorization: `Bearer ${API_KEY}`, // Add your default authorization header if needed
      "Content-Type": "application/json", // Set the default content type for requests
    },
  });

  //call the api to get the employee directory
  useEffect(() => {
    instance
      .get("/employees/directory")
      .then((response) => {
        console.log("Employee Directory:", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employee directory:", error);
      });
  }, []);

  return (
    <>
      <h1>Bamboo Employee Directory</h1>
      <div className="card">
        <h1>Employee Name</h1>
        <p>Email</p>
      </div>
    </>
  );
}

export default App;
