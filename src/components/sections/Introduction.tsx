import { WhatsAppButton } from "../buttons/WhatsAppButton";

export function Introduction() {
    return (
        <>
            <div className="h-screen">
                <img src="/cro-capa.webp" alt="Clínica de Reumatologia de Osasco" className="object-cover object-center w-full h-full opacity-60" />
                <div className="absolute inset-0 flex flex-col justify-center items-center px-8 gap-32 lg:gap-16">
                    <h1 className="text-5xl text-indigo-950 font-bold text-center">Excelência em Reumatologia</h1>
                    <div className="flex flex-col gap-2 lg:flex-row lg:gap-8">
                        <WhatsAppButton url="https://google.com.br" text="WhatsApp Osasco"/>
                        <WhatsAppButton url="https://google.com.br" text="WhatsApp São Paulo"/>
                    </div>
                </div>
            </div>
        </>
    )
}