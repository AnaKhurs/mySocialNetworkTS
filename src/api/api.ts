import axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,
        headers: {"API-KEY": "24771d0b-afb6-4f59-ba2e-1f7f77002e3d"},
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    }
)

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollowUser(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    followUser(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    getProfile(userId: string) {
        console.warn("Obsolete method. Please profileAPI object")
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    }
}

export const userAuthAPI = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}

