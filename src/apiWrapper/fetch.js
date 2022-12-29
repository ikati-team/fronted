import { ApiException } from "@/apiWrapper/exceptions";
import { router } from "@/router";

async function get(url, headers) {
    let response = await fetch(API_URL + url, {
        method: 'GET',
        headers: headers
    })
    if (response.status === 403) {
        await router.push({name: "Login"})
    }
    return await response.json()
}

async function post(url, headers, body) {
    let response = await fetch(API_URL + url, {
        method: 'POST',
        headers: headers,
        body: body
    });
    if (!response.ok) {
        throw new ApiException(response.status, await response.json())
    }
    try {
        return await response.json()
    } catch (SyntaxError) {
        return {}
    }
}

export { get, post }