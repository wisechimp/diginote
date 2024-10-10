import notebook from "@/dummyData/notebook"
import NoteCard from "./note-card"

type NoteListProps = {
  slug: string
  notebookId: number
}

const fetchNotebook = (notebookId: number) => {
  console.log(notebookId)
  return notebook
}

const NoteList = ({ slug, notebookId }: NoteListProps) => {
  const notebookData = fetchNotebook(notebookId)
  return (
    <div>
      {notebookData.map((note) => {
        return <NoteCard key={note.id} slug={slug} data={note} />
      })}
    </div>
  )
}

export default NoteList
