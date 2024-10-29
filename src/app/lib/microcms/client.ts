import { BookType } from "@/app/types/types";
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN!,
  apiKey: process.env.NEXT_PUBLIC_API_KEY!,
});

export const getAllBucks = async () => {
  const allBooks = await client.getList<BookType>({
    endpoint: "book-commerce-practice",
    customRequestInit: {
      cache: "no-store",
    },
  });
  return allBooks;
};

export const getDetailBook = async (contentId: string) => {
  const detailBook = await client.getListDetail<BookType>({
    endpoint: "book-commerce-practice",
    contentId,
    customRequestInit: {
      cache: "no-store",
    },
  });

  return detailBook;
};
