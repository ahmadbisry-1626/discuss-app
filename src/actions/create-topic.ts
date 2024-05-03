"use server"

import { auth } from "@/auth"
import { z } from "zod"
import type { Topic } from "@prisma/client"
import { CreateTopicFormState } from "@/interfaces"
import { db } from "@/db"
import { redirect } from "next/navigation"
import paths from "@/path"
import { revalidatePath } from "next/cache"

const createTopicSchema = z.object({
    name: z
        .string()
        .min(3)
        .regex(/^[a-z-]+$/, {
            message: 'Only lowercase letters and hyphens are allowed'
        }),
    description: z.string().min(10)
})


export async function createTopic(formState: CreateTopicFormState, formData: FormData): Promise<CreateTopicFormState> {
    const result = createTopicSchema.safeParse({
        name: formData.get('name'),
        description: formData.get('description')
    })

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors
        }
    }

    const session = await auth()
    if (!session || !session.user) {
        return {
            errors: {
                _form: ['You must be logged in to create a topic']
            }
        }
    }

    let topic: Topic;
    try {
        topic = await db.topic.create({
            data: {
                slug: result.data.name,
                description: result.data.description
            }
        })

        await new Promise(resolve => setTimeout(resolve, 2000))
    } catch (err: unknown) {
        if (err instanceof Error) {
            return {
                errors: {
                    _form: [err.message]
                }
            }
        } else {
            return {
                errors: {
                    _form: ['An unknown error occurred']
                }
            }
        }
    }

    revalidatePath('/')
    redirect(paths.topicShowPath(topic.slug))
}

export async function editTopic(id: string, formState: CreateTopicFormState, formData: FormData): Promise<CreateTopicFormState> {
    const result = createTopicSchema.safeParse({
        name: formData.get('editname'),
        description: formData.get('editdesc')
    })

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors
        }
    }

    let topic: Topic;
    try {
        topic = await db.topic.update({
            where: { id },
            data: {
                slug: result.data.name,
                description: result.data.description
            }
        })
    } catch (err: unknown) {
        if (err instanceof Error) {
            return {
                errors: {
                    _form: [err.message]
                }
            }
        } else {
            return {
                errors: {
                    _form: ['An unknown error occurred']
                }
            }
        }
    }

    revalidatePath('/')
    return {
        errors: {}
    }
}