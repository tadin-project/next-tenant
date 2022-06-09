export default function handler(req, res) {
  const data = req.body;

  if (req.method === "GET") {
    res.status(200);
    res.json({
      message: `ini adalah get`,
    });
  }

  if (req.method === "POST") {
    res.status(200);
    res.json({
      message: `ini adalah post dengan data ${JSON.stringify(data)}`,
    });
  }

  res.status(404).json({
    message: "URL not found",
  });
}
