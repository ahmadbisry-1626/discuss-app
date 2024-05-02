export interface CreateTopicFormState {
    errors: {
        name?: string[]
        description?: string[]
        _form?: string[]
    }
}

export interface CreatePostFormState {
    errors: {
        title?: string[]
        content?: string[]
        _form?: string[]
    }
}

export interface topicListProps {
    id: string;
    slug: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}