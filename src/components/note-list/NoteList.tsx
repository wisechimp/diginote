import NoteDataType from "@/types/NoteDataType"
import NoteCard from "./note-card/NoteCard"

type NoteListProps = {
  slug: string
  fetchData: () => NoteDataType[]
}

const NoteList = ({ slug, fetchData }: NoteListProps) => {
  const notebookData = fetchData()
  return (
    <div>
      {notebookData.map((note) => {
        return <NoteCard key={note.id} slug={slug} data={note} />
      })}
    </div>
  )
}

export default NoteList
