import { getServerSession } from "next-auth";
import { getAllBucks } from "./lib/microcms/client";
import { BookType, Purchase, User } from "./types/types";
import { nextAuthOptions } from "./lib/nextAuth/options";


import Book from "./componets/Book";

export default async function Home() {
  const session = await getServerSession(nextAuthOptions);
  const user = session?.user as User;


  

  let purchasesBookId: string[] = [];

  const { contents } = await getAllBucks();
  if (user) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/purchases/${user.id}`
    );

    const purchasesData = await response.json();

    purchasesBookId = purchasesData.map(
      (purchaseBook: Purchase) => purchaseBook.bookId
    );

    // console.log(purchasesBookId);
  }

  return (
    <>
      <main className="flex flex-wrap justify-center items-center md:mt-32 mt-20">
        <h2 className="text-center w-full font-bold text-3xl mb-2">
          Book Commerce
        </h2>
        {contents.map((book: BookType) => (
          <Book
            key={book.id}
            book={book}
            isPurcahsed={purchasesBookId.includes(book.id)}
          /> // 本のデータをマッピングして表示
        ))}
      </main>
    </>
  );
}
