import notebooks from "@/dummyData/notebooks"
import NotebooksListCard from "./notebook-list-card"

const fetchNotebooksData = () => {
  return notebooks
}

const NotebooksList = () => {
  const notebooksData = fetchNotebooksData()
  return (
    <div>
      {notebooksData.map((notebook) => {
        return <NotebooksListCard key={notebook.id} data={notebook} />
      })}
    </div>
  )
}

export default NotebooksList
