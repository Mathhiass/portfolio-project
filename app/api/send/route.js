import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req, res) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Resend API key is not configured on the server." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";

  try {
    const { email, subject, message } = await req.json();
    console.log("Email request received:", { email, subject, message });

    // In Resend's free tier (using onboarding@resend.dev), you can only send emails
    // to your own verified email address. If FROM_EMAIL is onboarding@resend.dev,
    // we only send to the owner's email to avoid API failure.
    const toEmails = ["bartolata.oliver@gmail.com"];
    if (fromEmail !== "onboarding@resend.dev" && email) {
      toEmails.push(email);
    }

    const data = await resend.emails.send({
      from: fromEmail,
      to: toEmails,
      reply_to: email,
      subject: subject || "New Portfolio Message",
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted by {email}:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message || error }, { status: 500 });
  }
}