"use client"

import { Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, useDisclosure } from '@nextui-org/react'
import React from 'react'
import { MdOutlineEdit } from 'react-icons/md'
import FormButton from '../common/FormButton'
import { useFormState } from 'react-dom'
import { editTopic } from '@/actions/create-topic'

function ModalEdit({ slug, desc, topicId }: { slug: string, desc: string, topicId: string }) {
    const [formState, action] = useFormState(editTopic.bind(null, topicId), {
        errors: {}
    });
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <button className='group' onClick={onOpen}>
                <MdOutlineEdit className='w-6 h-6 text-gray-50 group-hover:text-gray-300 transition duration-300 -translate-y-1' />
            </button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside" backdrop="opaque" size="xl">
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-1">Edit Topic</ModalHeader>
                        <form action={action}>
                            <ModalBody>
                                <Input
                                    defaultValue={slug}
                                    name="editname"
                                    label="Name"
                                    placeholder="Enter your topic name"
                                    size="lg" color="success"
                                    variant="bordered"
                                    isInvalid={!!formState.errors.name}
                                    errorMessage={formState.errors.name?.join(", ")}
                                />
                                <Textarea
                                    defaultValue={desc}
                                    name="editdesc"
                                    label="Description"
                                    placeholder="Describe your topic"
                                    rows={4}
                                    className="mt-4"
                                    size="lg"
                                    color="success"
                                    variant="bordered"
                                    isInvalid={!!formState.errors.description}
                                    errorMessage={formState.errors.description?.join(", ")} />

                                {formState.errors._form && (
                                    <div className="text-red-500 w-full flex justify-center items-center">
                                        <span className="">{formState.errors._form.join(", ")}</span>
                                    </div>
                                )}
                            </ModalBody>
                            <ModalFooter>
                                <FormButton>Edit Topic</FormButton>
                            </ModalFooter>
                        </form>
                    </>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalEdit