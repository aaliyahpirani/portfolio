export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  // TODO: wire up an email service (e.g. Resend, SendGrid) or store in a DB.
  // For now, log the submission so it's visible in the server console.
  console.log("[contact] New message:", { name, email, message });

  return Response.json({ ok: true });
}
