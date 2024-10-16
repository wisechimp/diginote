"use client"

import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import styles from "./rich-text-editor.module.css"

type RichTextEditorProps = {
  content: string
}

const RichTextEditor = ({ content }: RichTextEditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
  })

  return <EditorContent className={styles.textBox} editor={editor} />
}

export default RichTextEditor
