import apiRequest from './apiRequest'

export const singlePageLoader = async ({ request, params }) => {
     const resp = await apiRequest("/post/" + params.id)
     return resp.data
}

export const listPageLoader = async ({ request, params }) => {
     console.log(request)
     const query = request.url.split("?")[1]
     const resp = await apiRequest("/post?" + query)
     return resp.data
}

export const profilePageLoader = async () => {
     const [postResponse, chatResponse] = await Promise.all([
          apiRequest("/users/profilePosts"),
          apiRequest("/chats"),
     ]);

     return {
          postResponse: postResponse.data,
          chatResponse: chatResponse.data,
     };
}

