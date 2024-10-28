import { getDetailBook } from "@/app/lib/microcms/client";
import Image from "next/image";
import React from "react";

// params.idを用いてgetDetailBook関数を呼び出し:
// getDetailBook(params.id)により、このIDを使ってMicroCMSから該当する本のデータを取得します。
// この関数が実行されると、データベース（またはCMS）からその本の情報（book）が返されます。

const DetailBook = async ({ params }: { params: { id: string } }) => {
  const book = await getDetailBook(params.id);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
          src={book.thumbnail.url}
          alt="book.Img"
          className="w-full h-80 object-cover object-center"
          width={700}
          height={700}
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold">{book.title}</h2>
          <div
            className="text-gray-700 mt-2"
            dangerouslySetInnerHTML={{ __html: book.content }}
          />

          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-500">
              公開日:{new Date(book.publishedAt as any).toLocaleDateString()}
            </span>
            <span className="text-sm text-gray-500">
              最終更新:{new Date(book.updatedAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBook;
