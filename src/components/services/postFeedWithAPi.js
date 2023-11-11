import URL_API from "../../config/constants";

export const postFeedWithAPi = async (newFeed) => {
  try {
    const response = await fetch(`${URL_API}/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeed),
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
