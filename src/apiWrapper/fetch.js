import { ApiException } from "@/apiWrapper/exceptions";
import { router } from "@/router";

async function get(url) {
    const headers = new Headers()
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'))
    let response = await fetch(API_URL + url + '/', {
        method: 'GET',
        credentials: 'include',
        headers: headers
    })
    if (response.status === 403 || response.status === 401) {
        await router.push({ name: "Login", query: { back: router.currentRoute.value.fullPath } })
    }
    return await response.json()
}

async function post(url, body) {
    const headers = new Headers()
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'))
    let response = await fetch(API_URL + url + '/', {
        method: 'POST',
        credentials: 'include',
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

export async function delete_fetch(url) {
    const headers = new Headers()
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'))
    let response = await fetch(API_URL + url + '/', {
        method: 'DELETE',
        credentials: 'include',
        headers: headers
    })
    if (response.status === 403 || response.status === 401) {
        await router.push({ name: "Login", query: { back: router.currentRoute.value.fullPath } })
    }
    return await response.json()
}

export { get, post }