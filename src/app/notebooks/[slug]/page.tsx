import NoteList from "@/components/note-list/note-list"

type NotebookPageProps = {
  params: {
    slug: string
  }
}

const NotebookPage = ({ params }: NotebookPageProps) => {
  const { slug } = params
  return (
    <div>
      <h1>{slug}</h1>
      <NoteList />
    </div>
  )
}

export default NotebookPage
