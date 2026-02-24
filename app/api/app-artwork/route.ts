import { NextRequest, NextResponse } from "next/server";

const ITUNES_LOOKUP = "https://itunes.apple.com/lookup";

export async function GET(request: NextRequest) {
  const appId = request.nextUrl.searchParams.get("id");
  if (!appId) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  const res = await fetch(`${ITUNES_LOOKUP}?id=${appId}`);
  const data = await res.json();
  const url = data.results?.[0]?.artworkUrl512 ?? data.results?.[0]?.artworkUrl100 ?? null;
  return NextResponse.json({ artworkUrl: url });
}
