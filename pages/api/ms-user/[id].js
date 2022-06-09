export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === "PUT") {
    const data = req.body;
    res.status(200);
    res.json({
      message: `ini adalah update dengan id = ${id} dan data = ${JSON.stringify(
        data
      )}`,
    });
  }

  if (req.method === "DELETE") {
    res.status(200);
    res.json({
      message: `ini adalah delete dengan id = ${id}`,
    });
  }

  res.status(404).json({
    message: "URL not found",
  });
}
