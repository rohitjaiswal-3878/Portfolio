import axios from "axios";

const backendURL = "http://localhost:3001";

const getDetails = async () => {
  try {
    const response = await axios.get(`${backendURL}/details/get-details`);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export { getDetails };
