export function parsedResponseAllPostsApi(data) {
  const mappedData = data?.map((item) => ({
    id: item._id,
    title: item.title,
    description: item.content,
    date_feed: item.createdAt,
    author: {
      name: item.author?.name,
    },
    topics: item.tags,
  }));

  return { posts: mappedData };
}

export function parsedResponseOnePostApi(data) {
  const newObjectData = {
    id: data._id,
    title: data.title,
    date_feed: data.createdAt,
    author: {
      name: data.author?.name,
    },
    content: data.content,
    // comments: data.comments,
  };

  return { post: newObjectData };
}
