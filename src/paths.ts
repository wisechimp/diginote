const paths = {
  goHome() {
    return "/"
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
}

export default paths
