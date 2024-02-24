interface ReviewProps {
    text: string
    photoUrl: string
    name: string
    date: string
}

export function Review({ text, photoUrl, name, date }: ReviewProps) {
    return (
        <div className="lg:flex lg:flex-col lg:w-1/3">
            <div className="relative bg-white p-4 rounded-lg shadow-md">
                <p className="mb-6 italic font-light">{text}</p>
                {/* Triângulo */}
                <div className="absolute left-0 bottom-0 w-0 h-0 border-solid border-4 border-white border-t-0 border-l-2 border-r-2 transform rotate-45"></div>
            </div>
            <div className="flex items-center mt-4 px-4 gap-2">
                <img src={photoUrl} alt={name} className="rounded-full w-12 h-12 mr-4" />
                <div>
                    <p className="text-white uppercase font-semibold">{name}</p>
                    <p className="text-white">{date}</p>
                </div>
            </div>
        </div>
    )
}