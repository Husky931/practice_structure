export async function fetcher(url: string, options = {}) {
    let response
    if (!options) {
        response = await fetch(url)
    } else {
        response = await fetch(url, options)
    }

    let res
    await response.json().then((data) => console.log(data))
    return res
}
