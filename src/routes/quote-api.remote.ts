// src/lib/api.remote.ts
import { command } from '$app/server';

export const getQuote = command(async () => {
  const response = await fetch('http://api.quotable.io/random')
  const data = await response.json()
  return { data } // This data is returned to the client
})
