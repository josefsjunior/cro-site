import WhatsAppIcon from '@mui/icons-material/WhatsApp'

interface WhatsAppButtonProps {
    url: string
    text?: string
    defaultBackground?: boolean
}

export function WhatsAppButton({ url, text, defaultBackground }: WhatsAppButtonProps) {
    const TEXT = text ?? "WhatsApp"
    
    return (
        <>
            <a href={url} target="_blank">
                <button type="button" className={`flex text-white w-full px-6 py-2 fill-white gap-4 items-center rounded ${defaultBackground ? "bg-green-900" : "bg-indigo-950"}`}>
                    <WhatsAppIcon />
                    {TEXT}
                </button>
            </a>
        </>
    )
}