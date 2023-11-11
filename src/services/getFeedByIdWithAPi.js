import URL_API from "../config/constants";
import { parsedResponseOnePostApi } from "../helpers/parsedResponseApi";

export const getFeedByIdWithAPi = async (postId) => {
  try {
    const response = await fetch(`${URL_API}/post/${postId}`);
    const data = await response.json();
    const post = parsedResponseOnePostApi(data);
    return post;
  } catch (error) {
    console.log(error);
  }
};
