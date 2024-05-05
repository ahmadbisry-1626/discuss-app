"use server"

import * as auth from "@/auth"

export default async function signIn() {
    return auth.signIn('github')
}

export async function signOut() {
    return auth.signOut()
}