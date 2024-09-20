import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Diginote",
  description: "A digital notebook.",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <div id='root'>{children}</div>
      </body>
    </html>
  )
}

export default RootLayout
