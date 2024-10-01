import type { Metadata } from "next"
import "./globals.css"
import MainMenu from "@/components/menu/main-menu"

export const metadata: Metadata = {
  title: "Diginote",
  description: "A digital notebook.",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <div id='root'>
          <MainMenu />
          {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout
