export type Blog = {
  posts: Post[],
  postCategories: PostCategory[]
}

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  date: number;
  category: string;
}

export type PostCategory = {
  id: string;
  title: string;
}
