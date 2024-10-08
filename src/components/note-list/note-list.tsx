import notebook from "@/dummyData/notebook"
import NoteCard from "./note-card"

type NoteListProps = {
  notebookId: number
}

const fetchNotebook = (notebookId: number) => {
  console.log(notebookId)
  return notebook
}

const NoteList = ({ notebookId }: NoteListProps) => {
  const notebookData = fetchNotebook(notebookId)
  return (
    <div>
      {notebookData.map((note) => {
        return <NoteCard key={note.id} data={note} />
      })}
    </div>
  )
}

export default NoteList
