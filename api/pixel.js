let clicks = {};

export default function handler(req, res) {
  const { id = "unknown" } = req.query;
  clicks[id] = (clicks[id] || 0) + 1;

  res.setHeader("Content-Type", "image/gif");
  const gif = Buffer.from("R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", "base64");
  res.send(gif);
}

export { clicks };
