import URL_API from "../../config/constants";
import { parsedResponseAllPostsApi } from "../../helpers/parsedResponseApi";

export const getFeedsWithAPi = async () => {
  try {
    const response = await fetch(`${URL_API}/posts`);
    const data = await response.json();
    const posts = parsedResponseAllPostsApi(data);
    return posts;
  } catch (error) {
    console.log(error);
  }
};
