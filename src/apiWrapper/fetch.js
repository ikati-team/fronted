import { ApiException } from "@/apiWrapper/exceptions";
import { router } from "@/router";

async function get(url) {
    let response = await fetch(API_URL + url + '/', {
        method: 'GET',
        credentials: 'include'
    })
    if (response.status === 403) {
        await router.push({ name: "Login", query: { back: router.currentRoute.value.fullPath } })
    }
    return await response.json()
}

async function post(url, body) {
    let response = await fetch(API_URL + url + '/', {
        method: 'POST',
        credentials: 'include',
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