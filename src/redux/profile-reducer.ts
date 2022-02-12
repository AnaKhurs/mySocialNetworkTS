import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export type PostType = {
    id: number
    message: string
    like: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    profile: UserProfileDataType
    status: string
}
export type ContactsType = {
    facebook: null | string
    website: null | string
    vk: null | string
    twitter: null | string
    instagram: null | string
    youtube: null | string
    github: null | string
    mainLink: null | string
}
type PhotosType = {
    small: null | string
    large: null | string
}
export type UserProfileDataType = {
    aboutMe: null | string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: null | string
    fullName: null | string
    userId: number
    photos: PhotosType
}

const initialState = {
    status: '',
    posts: [
        {id: 1, message: "Hi, how are you?", like: 18},
        {id: 2, message: "It is my first post!!!", like: 19},
        {id: 3, message: "Yoooo", like: 10},
    ],
    profile: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: "NAME",
        userId: 0,
        photos: {
            small: null,
            large: null
        }
    }
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypeProfileReducer): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost = {id: 5, message: action.messagePost, like: 0}
            return {
                ...state,
                posts: [newPost, ...state.posts]
            }
        case "DELETE-POST":
            return {...state, posts: state.posts.filter(p => p.id !== action.id)}
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}
        case "SET_USER_STATUS":
            return {...state, status: action.status}
        case "SET_PHOTO_SUCCESS":
            return {...state, profile: {...state.profile, photos: action.photos}}
    }
    return state
}

export type ActionTypeProfileReducer =
    ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof setPhotoSuccess>


export const addPost = (text: string) => {
    return {
        type: 'ADD-POST',
        messagePost: text
    } as const
}

export const deletePost = (id: number) => {
    return {
        type: 'DELETE-POST',
        id
    } as const
}

export const setUserProfile = (profile: UserProfileDataType) => {
    return {
        type: "SET_USER_PROFILE",
        profile
    } as const
}

export const setUserStatus = (status: string) => {
    return {
        type: "SET_USER_STATUS",
        status
    } as const
}

export const setPhotoSuccess = (photos: any) => {
    return ({
        type: "SET_PHOTO_SUCCESS",
        photos
    } as const)
}

export const getUserProfile = (userId: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getUserStatus = (userId: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response.data))
}

export const updateUserStatus = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(setPhotoSuccess(response.data.data.photos))
    }
}



