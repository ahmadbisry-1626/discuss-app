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
import { useFormState } from "react-dom";
import FormButton from "./common/FormButton";
import Image from "next/image";


const CreateForm = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [success, setSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [formState, action] = useFormState(createTopic, {
        errors: {}
    });

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
                    <>
                        <ModalHeader className="flex flex-col gap-1">Create a Topic</ModalHeader>
                        <form action={action}>
                            <ModalBody>
                                <Input
                                    name="name"
                                    label="Name"
                                    placeholder="Enter your topic name"
                                    size="lg" color="success"
                                    variant="bordered"
                                    isInvalid={!!formState.errors.name}
                                    errorMessage={formState.errors.name?.join(", ")}
                                />
                                <Textarea
                                    name="description"
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
                                {/* <Button
                                    type="submit"
                                    color="success"
                                    className="text-gray-50"
                                    size="lg">
                                    Create Topic
                                </Button> */}

                                <FormButton>Create Topic</FormButton>
                            </ModalFooter>
                        </form>
                    </>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CreateForm