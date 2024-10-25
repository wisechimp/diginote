import NotebooksListCard from "./notebook-list-card/NotebookListCard"
import NotebooksDataType from "@/types/NotebookDataType"

// This will be a promise when we're fetching the actual data
type NotebooksListProps = {
  fetchData: () => NotebooksDataType[]
}

const NotebooksList = async ({ fetchData }: NotebooksListProps) => {
  const notebooksData = await fetchData()
  return (
    <div>
      {notebooksData.map((notebook) => {
        return <NotebooksListCard key={notebook.id} data={notebook} />
      })}
    </div>
  )
}

export default NotebooksList
