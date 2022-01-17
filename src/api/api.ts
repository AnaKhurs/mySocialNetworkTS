import axios, {AxiosResponse} from "axios";
import {UserProfileDataType} from "../redux/profile-reducer";

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
        return instance.put<string, AxiosResponse<ResponseType>>('/profile/status', {
            status
        })
    }
}

export const userAuthAPI = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}



/*
// api
export const todolistsAPI = {
    getTodolists() {
        return instance.get<TodolistType[]>('todo-lists');
    },
    createTodolist(title: string) {
        return instance.post<{ title: string }, AxiosResponse<ResponseType<{ item: TodolistType }>>>('todo-lists', {title});
    },
    deleteTodolist(id: string) {
        return instance.delete<ResponseType>(`todo-lists/${id}`);
    },
    updateTodolist(id: string, title: string) {
        return instance.put<{ title: string }, AxiosResponse<ResponseType>>(`todo-lists/${id}`, {title});
    },
    getTasks(todolistId: string) {
        return instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`);
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`);
    },
    createTask(todolistId: string, title: string) {
        return instance.post<{ title: string }, AxiosResponse<ResponseType<{ item: TaskType }>>>(`todo-lists/${todolistId}/tasks`, {title});
    },
    updateTask(todolistId: string, taskId: string, model: UpdateTaskModelType) {
        return instance.put<UpdateTaskModelType, AxiosResponse<ResponseType<{ item: TaskType }>>>(`todo-lists/${todolistId}/tasks/${taskId}`, model);
    }
}*/

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}