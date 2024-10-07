import { FaHome } from "react-icons/fa"
import { MdManageAccounts } from "react-icons/md"
import { SlNotebook } from "react-icons/sl"

const MenuData = [
  {
    title: "Home",
    link: "/",
    Icon: FaHome,
  },
  {
    title: "Notebooks",
    link: "/notebooks",
    Icon: SlNotebook,
  },
  {
    title: "Profile",
    link: "/profile",
    Icon: MdManageAccounts,
  },
]

export default MenuData
