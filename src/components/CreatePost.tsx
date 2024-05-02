"use client"

import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, useDisclosure } from '@nextui-org/react'
import React from 'react'
import { FaNewspaper } from 'react-icons/fa6'
import FormButton from './common/FormButton'
import { topicListProps } from '@/interfaces'
import { useFormState } from 'react-dom'
import { createPost } from '@/actions/create-post'

interface CreatePostProps {
    slug: string
}

const CreatePost = ({ slug }: CreatePostProps) => {
    const [formState, action] = useFormState(createPost.bind(null, slug), {
        errors: {}
    })
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <Button
                className='py-8 hover:!text-gray-50'
                startContent={<FaNewspaper className='w-10 h-10 mr-2' />}
                variant='ghost'
                color='success'
                onPress={onOpen}>
                Create New Post
            </Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside" backdrop="opaque" size="xl">
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-1">Create a Post</ModalHeader>
                        <form action={action}>
                            <ModalBody>
                                <Input
                                    name="title"
                                    label="Title"
                                    placeholder="Enter your post title"
                                    size="lg" color="success"
                                    variant="bordered"
                                    isInvalid={!!formState.errors.title}
                                    errorMessage={formState.errors.title?.join(", ")}
                                />
                                <Textarea
                                    name="content"
                                    label="Content"
                                    placeholder="Enter your post content"
                                    rows={4}
                                    className="mt-4"
                                    size="lg"
                                    color="success"
                                    variant="bordered"
                                    isInvalid={!!formState.errors.content}
                                    errorMessage={formState.errors.content?.join(", ")}
                                />

                                {formState.errors._form && (
                                    <div className="text-red-500 w-full flex justify-center items-center">
                                        <span>{formState.errors._form.join(", ")}</span>
                                    </div>
                                )}
                            </ModalBody>
                            <ModalFooter className='flex flex-col gap-2'>
                                <FormButton>Create Post</FormButton>
                                <span className='text-center text-[14px] text-gray-500'>
                                    You're gonna create a post on
                                    <span className='font-semibold capitalize'> {slug}</span> topic
                                </span>
                            </ModalFooter>
                        </form>
                    </>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CreatePost