export function parsedResponseAllPostsApi(data) {
  const mappedData = data?.map((item) => ({
    id: item._id,
    title: item.title,
    description: item.content,
    date_feed: item.createdAt,
    author: {
      name: item.author.name,
    },
    topics: item.tags,
  }));

  return { posts: mappedData };
}
