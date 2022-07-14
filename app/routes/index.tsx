import { Link, useLoaderData } from "remix";
import { getBookContent } from "../utils/content";

export async function loader() {
  return getBookContent("01O");
}

export default function Index() {
  const text = useLoaderData();
  console.log(text);
  return (
    <div className="mx-auto mt-16 max-w-7xl text-center">
      <Link to="/posts" className="text-xl text-blue-600 underline">
        Blog Posts
      </Link>
    </div>
  );
}
