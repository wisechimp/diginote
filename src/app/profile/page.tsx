import createClient from "@/supabase/server"
import { redirect } from "next/navigation"

const ProfilePage = async () => {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/login")
  }
  return (
    <div>
      <h1>Profile page</h1>
      <p>Welcome {data.user.email}</p>
      <p>
        How about setting up a user name so you receive a less robotic welcome
        message!?!
      </p>
    </div>
  )
}

export default ProfilePage
