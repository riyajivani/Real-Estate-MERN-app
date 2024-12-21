import apiRequest from './apiRequest'

export const singlePageLoader = async ({ request, params }) => {
     const resp = await apiRequest("/post/" + params.id)
     return resp.data
}