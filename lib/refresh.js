import fetchJson, { FetchError } from "lib/fetchJson";

export default async function refreshToken(refresh) {
  try {
    let resx = await fetchJson(`${process.env.SERVICE_URL}refresh`, {
      method: `POST`,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh_token: refresh }),
    });

    return JSON.stringify({ data: resx });
  } catch (error) {
    return JSON.stringify({ error: error.data });
  }
}
