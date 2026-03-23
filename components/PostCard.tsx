import { Post } from "@/types/post";
import Link from "next/link";

export function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-zinc-900 p-5 rounded-2xl hover:bg-zinc-800 transition">
      <h2 className="text-xl font-semibold mb-2">
        {post.title}
      </h2>

      <p className="text-zinc-400 mb-3">
        {post.content.slice(0, 120)}...
      </p>

      <Link
        href={`/post/${post.id}`}
        className="text-blue-400 hover:underline"
      >
        Ler mais →
      </Link>
    </div>
  );
}