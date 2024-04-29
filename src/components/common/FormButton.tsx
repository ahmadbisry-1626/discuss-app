import { Button} from '@nextui-org/react'
import React from 'react'
import { useFormStatus } from 'react-dom'
interface FormButtonProps {
    children: React.ReactNode
    formData?: FormData
}

const FormButton = ({ children, formData }: FormButtonProps) => {
    const { pending } = useFormStatus()

    return (
        <>
            <Button
                type="submit"
                color="success"
                className="text-gray-50"
                size="lg" isLoading={pending}>
                {children}
            </Button>
        </>
    )
}

export default FormButton