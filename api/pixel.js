export default function handler(req, res) {
  const { id = "unknown" } = req.query;
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  const log = `${new Date().toISOString()} | Pixel: ${id} | IP: ${ip}\n`;

  import('fs').then(fs => {
    fs.appendFile('pixel-log.txt', log, (err) => {
      if (err) console.error("Log write failed:", err);
    });
  });

  const gif = Buffer.from("R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", "base64");
  res.setHeader("Content-Type", "image/gif");
  res.send(gif);
}
