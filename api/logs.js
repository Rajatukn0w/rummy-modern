export default async function handler(req, res) {
  const SUPABASE_URL = "https://bbzhdylabnexgpcjmxfz.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  const table = "pixel_clicks";

  const result = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method: "GET",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json"
    }
  });

  const data = await result.json();
  res.status(200).json(data);
}
