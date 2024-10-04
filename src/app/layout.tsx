import type { Metadata } from "next"
import "./globals.css"
import MainMenu from "@/components/menu/main-menu"

export const metadata: Metadata = {
  title: "Diginote",
  description: "A digital notebook.",
}

type LayoutProps = {
  children: React.ReactNode
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang='en'>
      <body>
        <div id='root'>
          <main>
            <MainMenu />
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
