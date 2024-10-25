"use client"

import { EditorContent, JSONContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import styles from "./rich-text-editor.module.css"
import Dispatcher from "@/types/Dispatcher"
import { useEffect } from "react"

type RichTextEditorProps = {
  isEditing: boolean
  content: JSONContent
  setContent: Dispatcher<JSONContent>
}

const RichTextEditor = ({
  isEditing,
  content,
  setContent,
}: RichTextEditorProps) => {
  // Note that the order is important. When I placed editable later it wasn't picked up
  const editor = useEditor({
    shouldRerenderOnTransaction: false,
    immediatelyRender: false,
    editable: isEditing,
    extensions: [StarterKit],
    content: content,
    onUpdate: ({ editor }) => {
      setContent(editor.getJSON())
    },
  })

  useEffect(() => {
    if (!editor) {
      return undefined
    }
    editor.setEditable(isEditing)
  }, [editor, isEditing])

  return (
    <EditorContent
      className={`${isEditing ? styles.textBox : ""}`}
      editor={editor}
    />
  )
}

export default RichTextEditor
