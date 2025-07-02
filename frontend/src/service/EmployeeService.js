
    import axios from "axios";
   const BASE_URL = "http://localhost:8081/api/employees";
export const listEmployees = () => axios.get(BASE_URL);