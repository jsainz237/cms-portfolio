import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const tags = params.get("tags");

  if (!tags) {
    return NextResponse.json(
      { revalidated: false, message: "No tags provided" },
      { status: 400 },
    );
  }

  const requestHeaders = new Headers(request.headers);
  const secret = requestHeaders.get("x-revalidate-secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { revalidated: false, message: "Invalid secret" },
      { status: 401 },
    );
  }

  for (const tag of tags.split(",")) {
    revalidateTag(tag);
  }

  return NextResponse.json({ revalidated: true });
}
