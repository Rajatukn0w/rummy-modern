export default async function handler(req, res) {
  const { id = "unknown" } = req.query;
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const time = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const payload = {
    id,
    ip,
    time
  };

  const formspreeUrl = "https://formspree.io/f/mrbkypwb";

  try {
    await fetch(formspreeUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  } catch (err) {
    console.error("Formspree error:", err);
  }

  const gif = Buffer.from("R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", "base64");
  res.setHeader("Content-Type", "image/gif");
  res.send(gif);
}
