const paths = {
  goHome() {
    return "/"
  },
  showNotebooks() {
    return "/notebooks"
  },
  showNotebook(notebookSlug: string) {
    return `/notebooks/${notebookSlug}`
  },
  showNote(notebookSlug: string, noteId: string) {
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
