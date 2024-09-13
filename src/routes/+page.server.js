import fetchJson from "$lib/fetch-json"

export async function load() {
  const url = 'https://fdnd.directus.app/items/person/39'

  const persons = await fetchJson(url)

  return {
    person: persons.data
  }
}