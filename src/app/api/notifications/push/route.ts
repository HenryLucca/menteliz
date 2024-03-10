export async function POST(req: any, res: Response) {
  console.log(req.body);

  return Response.json({ message: "Success!" });
}
