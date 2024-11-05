import updateSession from "@/supabase/middleware"
import { NextRequest } from "next/server"

export const middleware = async (request: NextRequest) => {
  return await updateSession(request)
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
