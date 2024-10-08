import NoteList from "@/components/note-list/note-list"
import notebooks from "@/dummyData/notebooks"

type NotebookPageProps = {
  params: {
    notebookId: number
  }
}

const NotebookPage = ({ params }: NotebookPageProps) => {
  const { notebookId } = params
  const notebookTitle = notebooks.find(
    (notebook) => (notebook.id = notebookId)
  )?.title
  return (
    <div>
      <h1>{notebookTitle}</h1>
      <NoteList notebookId={notebookId} />
    </div>
  )
}

export default NotebookPage
