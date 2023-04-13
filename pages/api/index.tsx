export const config = {
  runtime: "edge",
};

export default function index(req: Request, res: Response) {
  return new Response("olá mundo");
}
