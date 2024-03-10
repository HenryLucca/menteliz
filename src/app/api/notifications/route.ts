import { NextRequest, NextResponse } from "next/server";
import WebPush from "web-push";

WebPush.setVapidDetails(
  "https://localhost:3000",
  process.env.NEXT_PUBLICVAPID_PUBLIC_KEY!,
  process.env.NEXT_PUBLICVAPID_PRIVATE_KEY!
);

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({ message: "Hello World" });
}

// register a subscription

/*  
 TODO: link subscription to user 
 then send medications notifications to the user browsers
*/

export async function POST(req: any, res: NextResponse) {
  const subscription = req.body?.subscription;

  console.log(subscription);

  return NextResponse.json({ message: "Hello World" });
}
