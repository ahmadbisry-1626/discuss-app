"use client"

import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import React from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import FormButton from '../common/FormButton'
import deleteTopic from '@/actions/create-topic'

const ModalDelete = ({ topicId }: { topicId: string }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const handleDelete = deleteTopic.bind(null, topicId)

    return (
        <>
            <button className='group' onClick={onOpen}>
                <MdDeleteOutline className='w-6 h-6 text-gray-50 group-hover:text-gray-300 transition duration-300 -translate-y-1' />
            </button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside" backdrop="opaque" size="xl">
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-1">Delete Topic</ModalHeader>
                        <form action={handleDelete}>
                            <ModalBody>
                                <p>Are you sure you want to delete this topic?</p>
                            </ModalBody>
                            <ModalFooter>
                                <FormButton>Delete Topic</FormButton>
                            </ModalFooter>
                        </form>
                    </>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalDelete