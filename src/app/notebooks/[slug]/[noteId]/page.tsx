"use client"

import { useParams } from "next/navigation"

/* type NotePageProps = {
  params: {
    slug: string
  }
} */

const NotePage = () => {
  const params = useParams<{ slug: string }>()
  const { slug } = params
  return (
    <div>
      <h1>{`The ${slug} notebook`}</h1>
      Here are some notes about a netterjack toad
    </div>
  )
}

export default NotePage
