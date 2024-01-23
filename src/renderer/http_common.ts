import axios from "axios";

function createClient() {
  const token = localStorage.getItem('token');
  const client = axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    "Content-type": "application/json",
    'Authorization': token ? `Token ${token}` : null,
    },
  });
  return client; 
}
export default createClient;
