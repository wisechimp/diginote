import notebook from "@/dummyData/notebookData"
import notebooks from "@/dummyData/notebooksData"
import blanknote from "@/siteData/blank-note"

const fetchNotebooks = () => {
  return notebooks
}

// Yeah this and the following will be merged into one, what a silly thing to do
const fetchNotebookFromNotebooks = (notebookId: number) => {
  const notebook = notebooks.find(({ id }) => id == notebookId)
  return notebook
}

const fetchNotebook = (notebookId: number) => {
  const notebookData = notebooks.find(({ id }) => id == notebookId)
  // Yeah this will be removed too
  console.log(notebookData)
  return notebook
}

const fetchNote = (noteId: number) => {
  const fetchedNoteData = notebook.find((note) => note.id === noteId)
  if (fetchedNoteData) {
    return fetchedNoteData
  } else return blanknote
}

export { fetchNotebooks, fetchNotebookFromNotebooks, fetchNotebook, fetchNote }
