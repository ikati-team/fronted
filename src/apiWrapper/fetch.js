async function get(url, headers) {
    let response = await fetch(API_URL + url, {
        method: 'GET',
        headers: headers
    })
    return await response.json()
}

async function post(url, headers) {
    let response = await fetch(API_URL + url, {
        method: 'POST',
        headers: headers
    });
    return await response.json()
}

export { get, post }