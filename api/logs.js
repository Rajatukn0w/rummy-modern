export default async function handler(req, res) {
  const SUPABASE_URL = "https://bbzhdylabnexgpcjmxfz.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJiemhkeWxhYm5leGdwY2pteGZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2NjI1ODgsImV4cCI6MjA2NjIzODU4OH0.UHncNkqmy7hYt9wCpzumT2gRdEcHP3bJcitA20LlqSY"
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
