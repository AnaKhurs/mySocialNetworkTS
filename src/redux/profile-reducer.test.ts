import React from 'react';
import {addPost, deletePost, profileReducer} from "./profile-reducer";


test('new post should be added', () => {

    const initialState = {
        status: '',
        posts: [
            {id: 1, message: "Hi, how are you?", like: 18},
            {id: 2, message: "It is my first post!!!", like: 19},
            {id: 3, message: "Yoooo", like: 10},
        ],
        profile: {
            "aboutMe": null,
            "contacts": {
                "facebook": null,
                "website": null,
                "vk": null,
                "twitter": null,
                "instagram": null,
                "youtube": null,
                "github": null,
                "mainLink": null
            },
            "lookingForAJob": false,
            "lookingForAJobDescription": null,
            "fullName": "NAME",
            "userId": 0,
            "photos": {
                "small": null,
                "large": null
            }
        }
    }

    const action = addPost("new test post")
    const newStare = profileReducer(initialState, action)
    expect(newStare.posts.length).toBe(4);
    expect(newStare.posts[0].message).toBe("new test post")
});

test('post should be deleted', () => {

    const initialState = {
        status: '',
        posts: [
            {id: 1, message: "Hi, how are you?", like: 18},
            {id: 2, message: "It is my first post!!!", like: 19},
            {id: 3, message: "Yoooo", like: 10},
        ],
        profile: {
            "aboutMe": null,
            "contacts": {
                "facebook": null,
                "website": null,
                "vk": null,
                "twitter": null,
                "instagram": null,
                "youtube": null,
                "github": null,
                "mainLink": null
            },
            "lookingForAJob": false,
            "lookingForAJobDescription": null,
            "fullName": "NAME",
            "userId": 0,
            "photos": {
                "small": null,
                "large": null
            }
        }
    }

    const action = deletePost(3)
    const newStare = profileReducer(initialState, action)
    expect(newStare.posts.length).toBe(2);
});
