"use client"

import { useState, type FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [msg, setMsg] = useState("")
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, msg }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus({ type: "success", text: "The message was sent successfully." })
        setName("")
        setEmail("")
        setPhone("")
        setMsg("")
      } else {
        setStatus({ type: "error", text: data.message || "Error: Message was not sent, Try again Later" })
      }
    } catch {
      setStatus({ type: "error", text: "Error: Message was not sent, Try again Later" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-container" id="frmcontact">
      {status && (
        <div
          role="status"
          aria-live="polite"
          className={`mb-3 rounded-md p-3 text-center text-sm ${
            status.type === "success" ? "bg-brand-soft text-brand-dark" : "bg-accent-soft text-accent"
          }`}
        >
          {status.text}
        </div>
      )}
      <form onSubmit={handleSubmit} className="grid gap-3">
        <div>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-10"
            placeholder="Your Name"
            aria-label="Your Name"
            required
          />
        </div>
        <div>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-10"
            placeholder="Your Email"
            aria-label="Your Email"
            required
          />
        </div>
        <div>
          <Input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="h-10"
            placeholder="Your Phone"
            aria-label="Your Phone"
            pattern="[1-9]{1}[0-9]{9}"
            title="10 digit mobile number required"
            required
          />
        </div>
        <div>
          <Textarea
            name="msg"
            rows={5}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Message"
            aria-label="Message"
            required
          />
        </div>
        <div>
          <Button
            type="submit"
            disabled={loading}
            className="cursor-pointer bg-accent text-white hover:bg-accent/90"
          >
            {loading ? "Sending..." : "SUBMIT"}
          </Button>
        </div>
      </form>
    </div>
  )
}