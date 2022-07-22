export function capitalizeFirstLetter(text: string) {
  if (!text) return
  const formattedText = text.toLowerCase()
  return formattedText.charAt(0).toUpperCase() + formattedText.slice(1)
}
