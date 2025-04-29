import { NextResponse } from "next/server";

import { getNowPlaying } from "@/src/components/now-playing";

export const GET = async () => {
  return NextResponse.json(await getNowPlaying());
};