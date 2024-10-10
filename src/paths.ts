import { cleanUrl } from "./utils"

const paths = {
  goHome() {
    return "/"
  },
  showNotebooks() {
    return "/notebooks"
  },
  showNotebook(notebookTitle: string) {
    const notebookSlug = cleanUrl(notebookTitle)
    return `/notebooks/${notebookSlug.toLocaleLowerCase()}`
  },
  showNote(notebookSlug: string, noteId: number) {
    return `/notebooks/${notebookSlug}/${noteId}`
  },
  createNote(notebookSlug: string) {
    return `/notebooks/${notebookSlug}/new`
  },
  showProfile() {
    return "/profile"
  },
}

export default paths
