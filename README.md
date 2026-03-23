# 🚀 Blog Pessoal com Next.js, TypeScript e Supabase

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/TypeScript-Blue?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/TailwindCSS-38BDF8?style=for-the-badge&logo=tailwind-css" />
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase" />
</p>

---

## 📌 Sobre o Projeto

Este projeto foi desenvolvido como parte do **Bootcamp Full Stack React Developer da DIO**, com o objetivo de consolidar conhecimentos em desenvolvimento moderno.

💡 Trata-se de um **blog pessoal completo**, com integração real com banco de dados.

---

## ✨ Funcionalidades

- ✅ Criar posts
- ✅ Listar posts dinamicamente
- ✅ Visualizar post individual
- ✅ Integração com banco de dados (Supabase)
- ✅ Estrutura profissional escalável

---

## 🧠 Tecnologias Utilizadas

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **Supabase**
- **Vercel (Deploy)**

---

## 📁 Estrutura do Projeto

```bash
meu-blog/
│
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── post/[id]/page.tsx
│   ├── dashboard/page.tsx
│   └── globals.css
│
├── components/
│   ├── Header.tsx
│   ├── PostCard.tsx
│
├── services/
│   └── posts.ts
│
├── lib/
│   └── supabase.ts
│
├── types/
│   └── post.ts
│
├── .env.local
└── package.json

---

## ⚙️ Como rodar o projeto

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
2. Instale as dependências
npm install
3. Configure o ambiente

Crie um arquivo .env.local:

NEXT_PUBLIC_SUPABASE_URL=SUA_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=SUA_KEY
4. Configure o banco (Supabase)

Crie uma tabela chamada posts com os campos:

Campo	Tipo
id	uuid
title	text
content	text
created_at	timestamp
5. Configurar permissões (RLS)

No Supabase:

Desative o RLS
ou
Crie policies permitindo:
true
6. Rodar o projeto
npm run dev

Acesse:

http://localhost:3000
🎨 Interface
Layout moderno
Design responsivo
Dark mode
Componentização com Tailwind
🚀 Melhorias Futuras
🔐 Autenticação de usuários
🖼️ Upload de imagens
💬 Comentários
❤️ Likes
🌙 Dark/Light mode
🧠 Editor estilo Medium
🧠 Aprendizados
Server e Client Components
Integração com APIs
Organização de código profissional
Uso de banco real com Supabase
Segurança com RLS
📌 Status

✅ Projeto funcional
🚧 Em evolução

👨‍💻 Autor

João Ryan
Bootcamp DIO - React Full Stack Developer
