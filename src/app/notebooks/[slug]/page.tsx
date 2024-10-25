import NoteList from "@/components/note-list/NoteList"
import {
  fetchNotebook,
  fetchNotebookFromNotebooks,
} from "@/db/queries/notebooks"

type NotebookPageProps = {
  params: {
    slug: string
  }
  searchParams: {
    id: string
  }
}

const NotebookPage = ({ params, searchParams }: NotebookPageProps) => {
  const notebookId = Number(searchParams.id)
  const notebook = fetchNotebookFromNotebooks(notebookId)

  return (
    <div>
      <h1>{notebook?.title}</h1>
      <NoteList
        slug={params.slug}
        fetchData={() => fetchNotebook(notebookId)}
      />
    </div>
  )
}

export default NotebookPage
