'use server';
import * as auth from '@/auth'

export const signIn = async () => {
    return auth.signIn('github')
}

export const signOut = async () => {
    return auth.signOut()
}

export const createComment = async () => {
    // TODO: revalidate the postviewpage
}

export const createPost = async () => {
    // TODO: revalidate the topicviewpage
}

export const createTopic = async () => {
    // TODO: revalidate the homepage
}