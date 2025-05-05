import { Colors } from "@/types"

export const fetchColors = async (): Promise<Colors> => {
  const resp = await fetch('http://localhost:3001/api/colors')
  return await resp.json()
}
