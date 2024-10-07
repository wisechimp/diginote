type NoteDataType = {
  title: string
}

const NoteCard = ({ title }: NoteDataType) => {
  return <div>{title}</div>
}

export default NoteCard
