/// <reference types="vite/client" />

declare type InputType = {
    tag: string
    name: string
    label: string
    required?: boolean
    className?: {
        label?: string
        input?: string
    }
}

declare type FaqType = {
    answer: string
    question: string
    id: null | number
}

declare type FormType = {
    title: string
    button: string
    description: string
    inputs: InputType[]
    className?: {
        inputs?: string
        button?: string
        container?: string
    }
}

declare type PartnerLinkType = {
    icon: any
    href: string
}

declare type SocialLinkType = {
    icon: any
    href: string
}

declare type TeamType = {
    name: string
    role: string
    image: string
}