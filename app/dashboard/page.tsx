"use client";

import { useState } from "react";
import { createPost } from "@/services/posts";
import { Header } from "@/components/Header";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  async function handleCreate() {
    await createPost(title, content);
    router.push("/");
    router.refresh();
  }

  return (
    <main>
      <Header />

      <div className="mt-6 flex flex-col gap-4">
        <input
          className="p-3 rounded-lg bg-zinc-900"
          placeholder="Título"
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="p-3 rounded-lg bg-zinc-900 h-40"
          placeholder="Conteúdo"
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          className="bg-blue-500 p-3 rounded-lg font-semibold hover:bg-blue-600"
          onClick={handleCreate}
        >
          Publicar
        </button>
      </div>
    </main>
  );
}