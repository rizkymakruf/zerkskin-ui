import fetchJson, { FetchError } from "lib/fetchJson";

export default async function checker(token) {

  try {
    let resx = await fetchJson(`${process.env.SERVICE_URL}def/checker`, {
                  method: `GET`,
                  headers: { 'Content-Type': 'application/json', 'Authorization': 'Basic ' + token },
                 });

    return JSON.stringify({data: 'ok'})
  } catch (error) {
    return JSON.stringify({error: error.data})
  }

}
