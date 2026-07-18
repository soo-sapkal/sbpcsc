"use client"

import { LibraryOverview } from "./LibraryOverview"
import { BookCollection } from "./BookCollection"
import { LibaryBookGrid } from "./LibaryBookGrid"

export function LibraryPage() {
  return (
    <>
      <section className="gradient-primary section-padding text-white">
        <div className="container-wide text-center">
          <h1 className="mb-3 text-3xl font-bold md:text-4xl">Library</h1>
          <p className="mx-auto max-w-2xl text-white/80">
            A treasure trove of knowledge empowering academic excellence and research
          </p>
        </div>
      </section>
      <LibraryOverview />
      <BookCollection />
      <LibaryBookGrid />
    </>
  )
}
