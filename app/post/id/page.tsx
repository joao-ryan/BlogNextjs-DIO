import { getPostById } from "@/services/posts";
import { Header } from "@/components/Header";

export default async function Post({ params }: any) {
  const post = await getPostById(params.id);

  return (
    <main>
      <Header />

      <article className="mt-6">
        <h1 className="text-4xl font-bold mb-4">
          {post.title}
        </h1>

        <p className="text-zinc-300 leading-relaxed">
          {post.content}
        </p>
      </article>
    </main>
  );
}