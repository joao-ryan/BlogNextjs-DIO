
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-zinc-950 text-white">
        <div className="max-w-3xl mx-auto px-4 py-8">
          {children}
        </div>
      </body>
    </html>
  );
}