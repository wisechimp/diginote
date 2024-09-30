import Link from "next/link"

const Home = () => {
  return (
    <main>
      <div>
        <h1>Welcome to Diginote!</h1>
        <p>
          Here are <Link href='/notebooks/toadslist'>some notebooks</Link>.
        </p>
        <p>
          Here is a link to your <Link href='/profile'>Profile</Link>
        </p>
      </div>
    </main>
  )
}

export default Home
