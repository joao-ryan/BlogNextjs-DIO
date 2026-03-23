import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold">📝 Meu Blog</h1>

      <Link
        href="/dashboard"
        className="bg-white text-black px-4 py-2 rounded-lg"
      >
        Novo Post
      </Link>
    </header>
  );
}