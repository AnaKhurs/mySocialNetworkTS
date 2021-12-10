type LocationType = {
    city: string
    country: string
}
export type User = {
    id: number
    fullName: string
    avatar: string
    followed: boolean
    status: string
    location: LocationType
}

type InitialStateType = {
    users: Array<User>
}

const initialState: InitialStateType = {
    users: [
        {
            id: 1,
            fullName: "Elena",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0AfKY4bAlZOoZf1-lx6csbUt1LrtdMeuzLaiYapJPAVaLPdfBQSr1dOy5SRO8vev0BdE&usqp=CAU",
            followed: true,
            status: "I am a boss",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 2,
            fullName: "Alexander",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8C8VibswhLf3oI9Y-oEncHluuxKte7xvRw&usqp=CAU",
            followed: true,
            status: "I am a boss to!",
            location: {city: "Minsk", country: "Belarus"}

        },
        {
            id: 3,
            fullName: "Maksim",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjiIep4R49K8xkJr_xQxVOXUvblr-wBlbGA&usqp=CAU",
            followed: true,
            status: "I am a boss to!!",
            location: {city: "Minsk", country: "Belarus"}

        },
        {
            id: 4,
            fullName: "Vladimir",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8C8VibswhLf3oI9Y-oEncHluuxKte7xvRw&usqp=CAU",
            followed: false,
            status: "I am a boss to!!!",
            location: {city: "Minsk", country: "Belarus"}

        },
    ]
}

export const userReducer = (state: InitialStateType = initialState, action: ActionTypeUserReducer): InitialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: true} : u)}
        }
        case "UNFOLLOW": {
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: false} : u)}
        }
        case "SET-USERS": {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export type ActionTypeUserReducer = FollowAT | UnfollowAT | SetUsersAT
type FollowAT = ReturnType<typeof followAC>
type UnfollowAT = ReturnType<typeof unfollowAC>
type SetUsersAT = ReturnType<typeof setUsersAC>

export const followAC = (id: number) => {
    return {
        type: "FOLLOW",
        id
    } as const
}

export const unfollowAC = (id: number) => {
    return {
        type: "UNFOLLOW",
        id
    } as const
}

export const setUsersAC = (users: Array<User>) => {
    return {
        type: "SET-USERS",
        users: users
    } as const
}