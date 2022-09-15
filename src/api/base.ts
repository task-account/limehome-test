import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://api.limehome.com/properties/v1/public/properties";

interface Response<T> {
  message: string;
  success: boolean;
  payload: T;
}

type CustomResponse<T> = AxiosResponse<Response<T>>;

const getData = <T>(response: CustomResponse<T>): T => {
  const { message, success, payload } = response.data;
  if (success) return payload;
  else throw Error(message);
};

export const api = {
  get: <T>(url: string, params = {}) =>
    axios.get<T, CustomResponse<T>>(url, { params }).then(getData)
};
