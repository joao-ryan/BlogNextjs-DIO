import { supabase } from "@/lib/supabase";
import { Post } from "@/types/post";

export async function getPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return data;
}

export async function getPostById(id: string): Promise<Post> {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function createPost(title: string, content: string) {
  const { error } = await supabase.from("posts").insert([
    { title, content },
  ]);

  if (error) throw new Error(error.message);
}