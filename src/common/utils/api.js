import axios from "axios";
const api = axios.create({ baseURL: "https://api.github.com/repos/" });

export const fetchRepo = async (
  repo,
  setCaughtError,
  setIsLoading,
  callBack
) => {
  try {
    const response = await api.get(`${repo}`);
    setCaughtError(false);
    setIsLoading(false);
    callBack(response?.data);
  } catch (err) {
    setCaughtError(err);
    setIsLoading(false);
    // console.error(err);
  }
};
