"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import createClient from "@/supabase/server"

const login = async (formData: FormData) => {
  const supabase = await createClient()

  // Use zod for validation, see S.G.
  const data = {
    email: formData.get("email") as string,
  }

  const { error } = await supabase.auth.signInWithOtp(data)

  if (error) {
    redirect("/error")
  }

  revalidatePath("/", "layout")
  redirect("/")
}

const signup = async (formData: FormData) => {
  const supabase = await createClient()

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect("/error")
  }

  revalidatePath("/", "layout")
  redirect("/")
}

export { login, signup }
