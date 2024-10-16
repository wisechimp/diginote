import MenuData from "@/siteData/menu"
import MenuItem from "./menu-item/menu-item"

import * as styles from "./main-menu.module.css"

const MainMenu = () => {
  const menuData = MenuData
  return (
    <div className={styles.menuContainer}>
      {menuData.map((menuItem, i) => {
        return <MenuItem key={`menu-item${i}`} menuItem={menuItem} />
      })}
    </div>
  )
}

export default MainMenu
