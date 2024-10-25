import NoteDataType from "@/types/NoteDataType"

const updateNote = (data: NoteDataType) => {
  console.log(
    `We're sending data to supabase for note ${data.id}: ${JSON.stringify(
      data
    )}`
  )
}

export default updateNote
