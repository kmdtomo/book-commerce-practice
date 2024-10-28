type BookType = {
  id: string;
  title: string;
  content: string;
  price: number;
  thumbnail: { url: string };
  createdAt: string;
  updateAt: string;
  publishedAt: string;
  updatedAt: string;
};

type User = {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

type Purchase = {
  id: string;
  userId: string;
  bookId: string;
  createdAt: string;
  user: User;
};

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl?: string;
  credentials?: {
    [key: string]: { label: string; type: string; required: boolean };
  };
};

type Providers = Record<string, Provider | null>;

export type { BookType, User, Purchase, Provider, Providers };
