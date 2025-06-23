export const config = {
  runtime: 'edge', // ensures edge-compatible deployment on Vercel
};

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id") || "unknown";

  const SUPABASE_URL = "https://bbzhdylabnexgpcjmxfz.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJiemhkeWxhYm5leGdwY2pteGZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2NjI1ODgsImV4cCI6MjA2NjIzODU4OH0.UHncNkqmy7hYt9wCpzumT2gRdEcHP3bJcitA20LlqSY"
  const table = "pixel_clicks";

  // Check if pixel ID already exists
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?id=eq.${id}`, {
    method: "GET",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
    },
  });

  const data = await res.json();

  if (data.length > 0) {
    // Update click count
    await fetch(`${SUPABASE_URL}/rest/v1/${table}?id=eq.${id}`, {
      method: "PATCH",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ count: data[0].count + 1 }),
    });
  } else {
    // Insert new pixel entry
    await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=representation"
      },
      body: JSON.stringify({ id, count: 1 }),
    });
  }

  return new Response(
    Uint8Array.from(atob("R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="), c => c.charCodeAt(0)),
    { headers: { "Content-Type": "image/gif" } }
  );
}
