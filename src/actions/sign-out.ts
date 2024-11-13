"use client"

import createClient from "@/supabase/client"
import { redirect } from "next/navigation"

const signout = async () => {
  console.log("Signing out?")
  const supabase = createClient()

  const { error } = await supabase.auth.signOut()

  if (error) {
    redirect("/error")
  }
  // May want to have a logged out page here?
  redirect("/")
}

export default signout
