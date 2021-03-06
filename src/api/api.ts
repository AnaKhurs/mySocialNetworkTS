import axios, {AxiosResponse} from "axios";
import {UserProfileDataType} from "../redux/profile-reducer";
import {DataTypeAuthMe} from "../redux/auth-reducer";

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
        return instance.get<UserProfileDataType>(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get<string>(`/profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put<string, AxiosResponse<ResponseType>>('/profile/status', {status})
    },
    savePhoto(file: File) {
        const formData = new FormData()
        formData.append("image", file)
        return instance.put<File, AxiosResponse<ResponseType<{ photos: PhotosResponseType }>>>('/profile/photo', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    saveProfile(profile: UserProfileDataType) {
        return instance.put<UserProfileDataType, AxiosResponse<ResponseType>>('/profile', profile)
    }
}

export const userAuthAPI = {
    getAuthMe() {
        return instance.get<ResponseType<DataTypeAuthMe>>(`auth/me`)
    },
    logIn(email: string, password: string, rememberMe: boolean, captcha: string) {
        return instance.post<{ userId: number }, AxiosResponse<ResponseType<{ userId: number }>>>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha,
        })
    },
    logOut() {
        return instance.delete<ResponseType>(`auth/login`)
    },
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<{ url: string }>(`security/get-captcha-url`)
    },
}


export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}

type PhotosResponseType = {
    small: string
    large: string
}