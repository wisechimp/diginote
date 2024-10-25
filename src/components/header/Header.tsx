type HeaderProps = {
  pageTitle: string
}

const Header = ({ pageTitle }: HeaderProps) => {
  return (
    <div>
      <h1>{pageTitle}</h1>
    </div>
  )
}

export default Header
