import Header from "@/components/header/header"
import Link from "next/link"

const Home = () => {
  return (
    <div>
      <Header pageTitle='Welcome to Diginote!' />
      <p>
        Here are <Link href='/notebooks'>some notebooks</Link>.
      </p>
    </div>
  )
}

export default Home
