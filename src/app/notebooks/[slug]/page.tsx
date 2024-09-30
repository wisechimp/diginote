// This will be removed when the slug is passed down by the Linking component
"use client"

import Link from "next/link"
import { useParams } from "next/navigation"

/* type NotebookPageProps = {
  params: {
    slug: string
  }
} */

const NotebookPage = () => {
  const params = useParams<{ slug: string }>()
  const { slug } = params
  return (
    <div>
      <h1>{`The ${slug} notebook`}</h1>
      <Link href='/notebooks/toadslist/natterjack'>A notebook</Link>
    </div>
  )
}

export default NotebookPage
