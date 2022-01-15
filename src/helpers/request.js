import axios from "axios";

async function request(url, data, method = "GET") {
  try {
    const res = await axios(url, {
      data,
      method,
    });
    return res.data;
  } catch (e) {
    return 404;
  }
}

export { request };
