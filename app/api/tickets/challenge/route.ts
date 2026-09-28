import { NextResponse } from "next/server";
import { generateAntiBotChallenge } from "@/lib/anti-bot";

export const dynamic = "force-dynamic";

export async function GET(): Promise<NextResponse> {
  try {
    const challenge = generateAntiBotChallenge();
    return NextResponse.json(challenge, {
      status: 200,
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error: unknown) {
    console.error("[AntiBot Challenge Exception]", error);
    return NextResponse.json(
      { error: "Impossible de générer le défi de sécurité." },
      { status: 500 }
    );
  }
}
