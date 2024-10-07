const paths = {
  goHome() {
    return "/"
  },
  showNotebooks() {
    return "/notebooks"
  },
  showNotebook(notebookTitle: string) {
    let notebookSlug = notebookTitle
    if (notebookTitle.includes(" ")) {
      notebookSlug = notebookTitle.replace(" ", "-")
    }
    return `/notebooks/${notebookSlug.toLocaleLowerCase()}`
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
