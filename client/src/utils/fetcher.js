import axios from "axios";

const fetcher = (url) =>
  axios
    .post(url, {
      withCredentials: true,
    })
    .then((response) => {
      const accessToken = response.data.token;
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      console.log(accessToken);
    });

export default fetcher;
