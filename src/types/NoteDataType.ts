import { JSONContent } from "@tiptap/core"

type NoteDataType = {
  id: number
  title: string
  content: JSONContent
  user_id: number
  notebook_id: number
  created_at: number
  updated_at: number
}

export default NoteDataType
