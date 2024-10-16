type ButtonProps = {
  clicking: () => void
  editing: boolean
  prompt: string
}

const Button = ({ clicking, editing, prompt }: ButtonProps) => {
  return (
    <button onClick={() => clicking()} disabled={editing}>
      {prompt}
    </button>
  )
}

export default Button
