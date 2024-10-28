import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

//1
export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;
  //2
  try {
    const purchases = await prisma.purchase.findMany({
      where: { userId: userId },
    });
    return NextResponse.json(purchases);
  } catch (err) {
    return NextResponse.json(err);
  }
}

// 1.リクエストの受け取りとparamsの取得:
// GETリクエストがAPIエンドポイント
// （例えば、/api/user/123/purchases）に送信されると、
// Next.jsはそのURLからuserIdをparamsとして取得します。
// ここでは123がparams.userIdに格納されます。

// 2.userIdを利用してデータベースから購入履歴を取得:
// prisma.purchase.findManyを使用し、データベース内で
// userIdが123である購入情報を検索します。

// 3.取得データの返却:
// 取得した購入情報（purchases）をNextResponse.jsonでレスポンスとして返し、
// リクエスト元がJSON形式でデータを受け取れるようにします。
