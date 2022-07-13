import { useLoaderData } from "@remix-run/react";
import { json, Link } from "remix";
import { getPosts } from "~/models/post.server";

interface Posts {
  posts: Awaited<ReturnType<typeof getPosts>>;
}

export const loader = async () => {
  return json<Posts>({
    posts: await getPosts(),
  });
};

export default function Posts() {
  const { posts } = useLoaderData<Posts>();
  console.log({ posts });
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
