export const cleanUrl = (slug: string) => {
  let cleanedUrl = slug
  if (slug.includes(" ")) {
    cleanedUrl = slug.replace(" ", "-")
  }
  return cleanedUrl
}
