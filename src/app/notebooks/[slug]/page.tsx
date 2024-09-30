// This will be removed when the slug is passed down by the Linking component
"use client"

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
    </div>
  )
}

export default NotebookPage
