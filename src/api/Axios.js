import axios from "axios";

console.log(process.env.REACT_APP_TOKEN_API)
const Axios=axios.create({
    baseURL: "https://gorest.co.in/public/v2/",
    timeout: 1000,
    headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN_API}` }
});

export default Axios;