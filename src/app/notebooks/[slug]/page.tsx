import NoteList from "@/components/note-list/NoteList"
import notebooks from "@/dummyData/notebooks"

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
  const notebook = notebooks.find(({ id }) => id == notebookId)

  return (
    <div>
      <h1>{notebook?.title}</h1>
      <NoteList slug={params.slug} notebookId={notebookId} />
    </div>
  )
}

export default NotebookPage
