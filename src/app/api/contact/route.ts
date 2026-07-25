import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, phone, msg } = await request.json()

    if (!name || !email || !phone || !msg) {
      return NextResponse.json({ success: false, message: "All fields are required." }, { status: 400 })
    }

    const to = "sbpc.science@gmail.com"
    const subject = "Enquiry for SBPCSC"
    const message = `Name: ${name} Email: ${email} Phone: ${phone} Message: ${msg}`
    const headers = `From: ${name} <${email}>`

    const apiKey = process.env.RESEND_API_KEY

    if (apiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "SBPCSC Contact <onboarding@resend.dev>",
          to: [to],
          subject,
          text: message,
        }),
      })

      if (!res.ok) {
        console.error("Resend API error:", await res.text())
        return NextResponse.json({ success: false, message: "Failed to send email. Try again later." }, { status: 500 })
      }

      return NextResponse.json({ success: true, message: "The message was sent successfully." })
    }

    console.log("Contact form submission:", { to, subject, message, headers })
    return NextResponse.json({ success: true, message: "The message was sent successfully." })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json({ success: false, message: "Error: Message was not sent, Try again Later" }, { status: 500 })
  }
}
