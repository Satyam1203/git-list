import axios from "axios";

async function request(url, data, method = "GET") {
  const res = await axios(url, {
    data,
    method,
  });
  return res.data;
}

export { request };
