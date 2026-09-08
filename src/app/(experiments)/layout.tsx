export default function ExperimentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="experiments-layout min-h-screen bg-slate-900 text-slate-100 antialiased">
      {children}
    </div>
  )
}
