"use server"

import { auth } from "@/auth"
import { CreatePostFormState } from "@/interfaces"
import { z } from "zod"

const createPostSchema = z.object({
    title: z.string().min(3),
    content: z.string().min(10)
})

export async function createPost(formState: CreatePostFormState, formData: FormData): Promise<CreatePostFormState> {
    const result = createPostSchema.safeParse({
        title: formData.get('title'),
        content: formData.get('content')
    })

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors
        }
    }

    const session = await auth()
    if(!session || !session.user) {
        return {
            errors: {
                _form : ['You must be logged in to create a post']
            }
        }
    }

    return {
        errors: {}
    }
}