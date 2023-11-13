import URL_API from "../config/constants";

export const getCommentsByIdWithApi = async (postId) => {
  try {
    if (postId) {
      const response = await fetch(`${URL_API}/commentsbypost/${postId}`);
      const comments = await response.json();
      return comments;
    }
  } catch (error) {
    console.log(error);
  }
};
