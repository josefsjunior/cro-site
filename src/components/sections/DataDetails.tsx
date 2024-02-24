interface DetaDetailsProps {
    value: string
    description: string
}

export function DataDetails({ value, description }: DetaDetailsProps) {
    return (
        <>
            <div className="flex flex-col items-center text-indigo-950 gap-1 lg:flex-row lg:items-center lg:gap-4 lg:justify-center">
                <h4 className="text-5xl font-bold lg:text-6xl">{value}</h4>
                <h4 className="text-2xl font-thin uppercase lg:w-1/2">{description}</h4>
            </div>
        </>
    )
}