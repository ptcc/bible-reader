import { json } from "remix";

interface Post {
  slug: string;
  title: string;
}

export const getPosts = async (): Promise<Array<Post>> => [
  {
    slug: "my-first-post",
    title: "My First Post",
  },
  {
    slug: "90s-mixtape",
    title: "A Mixtape I Made Just For You",
  },
];
