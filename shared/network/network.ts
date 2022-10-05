import axios, { AxiosRequestConfig } from "axios";
import { getCookie } from "cookies-next";
import qs from "qs";

interface FetchProps {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  url: string;
  data: Object;
  params?: Object;
}

class Axios {
  // Post
  static async fetch({
    method = "GET",
    url = "",
    data = {},
    params = {},
  }: FetchProps) {
    var postData = qs.stringify(data);
    var config: AxiosRequestConfig = {
      method: method,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${url}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${getCookie("token")}`,
      },
      data: postData,
    };
    if (method == "GET") {
      config["params"] = params;
    }

    const result = await axios(config)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        //   console.log(error);
        return error;
      });

    return result;
  }
}

export default Axios;
