import "./globals.css";
import { getPosts } from "@/services/posts";
import { PostCard } from "@/components/PostCard";
import { Header } from "@/components/Header";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <Header />

      <h2 className="text-3xl font-bold mb-6">
        Últimos posts
      </h2>

      <div className="flex flex-col gap-4">
        {posts.length === 0 ? (
          <p className="text-zinc-400">
            Nenhum post ainda...
          </p>
        ) : (
          posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        )}
      </div>
    </main>
  );
}