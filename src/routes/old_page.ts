import type { PageLoad } from "./$types"
export const load = async ({ fetch }) => {
    try {
        const response = await fetch('https://api.quotable.io/random',
          { headers: { 'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json' }
            })

    const data = await response.json()
    return { data }
        } catch {
            console.log('Error in fetch from load function!')
        }
}
