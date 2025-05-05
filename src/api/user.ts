import { UserData } from "@/types"

export const submitUserData = (data: UserData) => {
  return fetch('http://localhost:3001/api/submit', { 
    method: 'post',
    headers: { 
      'CONTENT-TYPE': 'application/json'
    },
    body: JSON.stringify(data) 
  })
}
