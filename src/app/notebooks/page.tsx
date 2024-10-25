import NotebooksList from "@/components/notebook-list/NotebookList"
import { fetchNotebooks } from "@/db/queries/notebooks"

const NotebooksPage = () => {
  return (
    <div>
      <h1>Notebooks</h1>
      <NotebooksList fetchData={() => fetchNotebooks()} />
    </div>
  )
}

export default NotebooksPage
