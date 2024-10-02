import MenuData from "@/siteData/menu"
import MenuItem from "./menu-item"

import * as styles from "./main-menu.module.css"

const MainMenu = () => {
  const menuData = MenuData
  return (
    <div className={styles.menuContainer}>
      {menuData.map((menuItem, i) => {
        const { title, link } = menuItem
        return <MenuItem key={`menu-item${i}`} title={title} link={link} />
      })}
    </div>
  )
}

export default MainMenu
