import MenuItemType from "@/types/MenuItemType"
import Link from "next/link"
import styles from "./menu-item.module.css"

type MenuItemProps = {
  menuItem: MenuItemType
}

const MenuItem = ({ menuItem }: MenuItemProps) => {
  const { title, link, Icon } = menuItem
  return (
    <Link href={link}>
      <div className={styles.menuItemContainer}>
        <Icon />
        {`${title}`}
      </div>
    </Link>
  )
}

export default MenuItem
