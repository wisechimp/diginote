"use client"

import { useState } from "react"
import { JSONContent } from "@tiptap/core"

import styles from "./note-page.module.css"
import RichTextEditor from "@/components/rich-text-editor/RichTextEditor"
import { fetchNote } from "@/db/queries/notebooks"
import { updateNote } from "@/actions"

type NotePageProps = {
  params: {
    noteId: string
  }
}

const NotePage = ({ params }: NotePageProps) => {
  const noteData = fetchNote(Number(params.noteId))
  const { title, content } = noteData!
  const [noteContent, setNoteContent] = useState<JSONContent>(content)
  const [isEditing, setIsEditing] = useState(false)

  const editNote = () => {
    return setIsEditing(!isEditing)
  }

  const saveNote = (noteContent: JSONContent) => {
    const newNoteData = { ...noteData, content: noteContent }
    updateNote(newNoteData)
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
