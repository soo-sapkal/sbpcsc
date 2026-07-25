"use client"

import { useState, type FormEvent } from "react"

export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [msg, setMsg] = useState("")
  const [status, setStatus] = useState<string | null>(null)
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
        setStatus("The message was sent successfully.")
        setName("")
        setEmail("")
        setPhone("")
        setMsg("")
      } else {
        setStatus(data.message || "Error: Message was not sent, Try again Later")
      }
    } catch {
      setStatus("Error: Message was not sent, Try again Later")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-container" id="frmcontact">
      {status && (
        <div className="mb-2 bg-gray-100 p-3 text-center text-sm text-gray-700">{status}</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
            placeholder="Your Phone"
            pattern="[1-9]{1}[0-9]{9}"
            title="10 digit mobile number required"
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            name="msg"
            rows={5}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
            placeholder="Message"
            required
          />
        </div>
        <div className="mb-3">
          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer rounded bg-[#cf2b1f] px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#b82318] disabled:opacity-60"
          >
            {loading ? "Sending..." : "SUBMIT"}
          </button>
        </div>
      </form>
    </div>
  )
}
