import notebook from "@/dummyData/notebook"

type NotePageProps = {
  params: {
    noteId: number
  }
}

const fetchNoteData = (noteId: number) => {
  const noteData = notebook.find((note) => (note.id = noteId))
  return noteData
}

const NotePage = ({ params }: NotePageProps) => {
  const { noteId } = params
  const data = fetchNoteData(noteId)

  const { title, content } = data!
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default NotePage
