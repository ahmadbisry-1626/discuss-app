"use client"

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
    Textarea,
} from "@nextui-org/react";
import { FaNewspaper } from "react-icons/fa6";
import { createTopic } from "@/actions/create-topic";
import { useState } from "react";
import Image from "next/image";


const CreateForm = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [success, setSuccess] = useState(false)

    return (
        <>
            <Button
                className='py-8 hover:!text-gray-50'
                startContent={<FaNewspaper className='w-10 h-10 mr-2' />}
                variant='ghost'
                color='success'
                onPress={onOpen}>
                Create New Topic
            </Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside" backdrop="opaque" size="xl">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Create a Topic</ModalHeader>
                            <form action={createTopic}>
                                <ModalBody>
                                    <Input
                                        name="name"
                                        label="Name"
                                        placeholder="Enter your topic name"
                                        size="lg" color="success"
                                        variant="bordered"
                                    />
                                    <Textarea
                                        name="description"
                                        label="Description"
                                        placeholder="Enter your description"
                                        rows={4}
                                        className="mt-4"
                                        size="lg"
                                        color="success"
                                        variant="bordered" />
                                </ModalBody>
                                <ModalFooter>
                                    <Button
                                        type="submit"
                                        color="success"
                                        className="text-gray-50"
                                        size="lg"
                                        onPress={onClose}
                                        onClick={() => setSuccess(true)}>
                                        Create Topic
                                    </Button>
                                </ModalFooter>
                            </form>
                        </>
                    )}
                </ModalContent>
            </Modal>


            <Modal isOpen={success}>
                <ModalContent>
                    <ModalBody className="py-6">
                        <div className="flex flex-col gap-4 items-center justify-center">
                            <Image src='/images/check.gif' alt="" width={100} height={100} />
                            <h1 className="text-2xl font-bold text-center">Topic Created <span className="text-green-500">Successfully!</span></h1>
                        </div>
                        <Button color="success" onClick={() => setSuccess(false)} className="mt-4 text-gray-50" size="lg">
                            Close
                        </Button>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CreateForm