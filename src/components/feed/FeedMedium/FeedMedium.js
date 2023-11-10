import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { NotResults } from "../../common";
import { getFeedByIdWithAPi } from "../../services/getFeedByIdWithAPi";
import { Feed } from "../Feed/Feed";

export const FeedMedium = () => {
  const { id } = useParams();
  const [feed, setFeed] = useState(null);

  useEffect(() => {
    const fetchOnePost = async () => {
      try {
        const { post } = await getFeedByIdWithAPi(id);
        setFeed(post);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOnePost();
  }, [id]);

  return (
    <section className="feed-medium">
      {feed ? <Feed feed={feed} /> : <NotResults />}
    </section>
  );
};
