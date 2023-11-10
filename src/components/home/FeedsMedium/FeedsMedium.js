import React, { useEffect, useState } from "react";

import { FeedsMediumList } from "../FeedsMediumList";
import { getFeedsWithAPi } from "../../services/getFeedsWithAPi";
import { NotResults } from "../../common";

// import feeds from "../../../mocks/data-feeds";

export const FeedsMedium = () => {
  const [feeds, setFeeds] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { posts } = await getFeedsWithAPi();
        setFeeds(posts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="feeds-medium">
      {feeds ? <FeedsMediumList feeds={feeds} /> : <NotResults />}
    </section>
  );
};
