import Link from "next/link"

type MenuItemProps = {
  title: string
  link: string
}

const MenuItem = ({ title, link }: MenuItemProps) => {
  return (
    <div>
      <Link href={link}>{title}</Link>
    </div>
  )
}

export default MenuItem
