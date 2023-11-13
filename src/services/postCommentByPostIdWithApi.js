import URL_API from "../config/constants";

export const postCommentByPostIdWithApi = async (postId, newComment) => {
  try {
    const response = await fetch(`${URL_API}/comment/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    });
  } catch (error) {
    console.log(error);
  }
};
