import URL_API from "../config/constants";

export const deleteFeedByIdWithApi = async (postId) => {
  try {
    const response = await fetch(`${URL_API}/post/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
