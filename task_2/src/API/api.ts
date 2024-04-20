export async function getRatio(currency: string) {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/26ff6de0af45f4acdc9a3aa9/latest/${currency}`)
    const data = await response.json()
    return await data["conversion_rates"]
}