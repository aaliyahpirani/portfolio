import { Resend } from "resend";

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

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "aaliyah.pirani@gmail.com";
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("[contact] Missing RESEND_API_KEY");
    return Response.json(
      { error: "Email is not configured yet." },
      { status: 500 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: [
        `New message from your portfolio contact form.`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        ``,
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return Response.json({ error: "Failed to send email." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return Response.json({ error: "Failed to send email." }, { status: 500 });
  }
}
