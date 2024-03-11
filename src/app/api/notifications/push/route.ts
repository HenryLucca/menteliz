import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const subscription = body.subscription;
  const userData = body.userData;

  console.log(userData);
  console.log(subscription);

  // console.log(body);

  return new Response("OK");
}
