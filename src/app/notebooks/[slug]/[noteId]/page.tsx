"use client"

import { useState } from "react"
import { JSONContent } from "@tiptap/core"

import styles from "./note-page.module.css"
import RichTextEditor from "@/components/rich-text-editor/RichTextEditor"
import NoteDataType from "@/types/NoteDataType"
import notebook from "@/dummyData/notebook"
import blanknote from "@/siteData/blank-note"

type NotePageProps = {
  params: {
    noteId: string
  }
}

const fetchNoteData = (noteId: number) => {
  const fetchedNoteData = notebook.find((note) => note.id === noteId)
  console.log(fetchedNoteData)
  if (fetchedNoteData) {
    return fetchedNoteData
  } else return blanknote
}

const updateNoteData = (data: NoteDataType) => {
  console.log(
    `We're sending data to supabase for note ${data.id}: ${JSON.stringify(
      data
    )}`
  )
}

const NotePage = ({ params }: NotePageProps) => {
  const noteData = fetchNoteData(Number(params.noteId))
  const { title, content } = noteData!
  const [noteContent, setNoteContent] = useState<JSONContent>(content)
  const [isEditing, setIsEditing] = useState(false)

  const editNote = () => {
    return setIsEditing(!isEditing)
  }

  const saveNote = (noteContent: JSONContent) => {
    const newNoteData = { ...noteData, content: noteContent }
    updateNoteData(newNoteData)
    return setIsEditing(!isEditing)
  }

  return (
    <div>
      <h1>{title}</h1>
      <div className={styles.editorContainer}>
        <RichTextEditor
          isEditing={isEditing}
          content={noteContent}
          setContent={setNoteContent}
        />
      </div>
      <div>
        <button disabled={isEditing} onClick={() => editNote()}>
          Edit
        </button>
        <button disabled={!isEditing} onClick={() => saveNote(noteContent)}>
          Save
        </button>
      </div>
    </div>
  )
}

export default NotePage
