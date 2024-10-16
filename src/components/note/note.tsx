type NoteProps = {
  content: string
}

const Note = ({ content }: NoteProps) => {
  return <div>{content}</div>
}

export default Note
