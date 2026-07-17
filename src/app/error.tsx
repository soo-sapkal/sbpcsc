"use client"

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-destructive">Something went wrong</h1>
      <p className="mt-4 text-muted-foreground">An unexpected error occurred.</p>
      <button
        onClick={reset}
        className="mt-6 rounded-md bg-primary px-6 py-2 text-white transition-colors hover:bg-primary/90"
      >
        Try Again
      </button>
    </div>
  )
}
