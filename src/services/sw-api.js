const baseUrl = 'https://swapi.dev/'

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/api/starships`)
  return res.json()
}

export async function getDetails(url) {
  const res = await fetch(`${url}`)
  return res.json()
}