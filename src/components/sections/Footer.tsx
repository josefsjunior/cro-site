import { ClinicInfo } from "./ClinicInfo";


export function Footer() {
    return (
        <footer className="flex flex-col bg-indigo-950 text-center p-8 gap-16 lg:flex-row lg:mx-auto lg:justify-evenly lg:text-left">
            <ClinicInfo
                name="Osasco"
                street="Rua Cipriano Tavares, 123"
                floor="5º andar"
                city="Centro - Osasco/SP"
                email="recadososasco@reumatologiaosasco.com.br"
                workDayHours="08h às 19h30 - Segunda a Sexta"
                weekendHours="08h às 12h - Sábado (quinzenalmente)"
                phone="PABX: (11) 2284-1929"
                whatsAppUrl=""
            />
            <ClinicInfo
                name="São Paulo"
                street="Rua Maestro Cardim, 407"
                floor="8º andar, conjunto 802"
                city="Bela Vista - São Paulo/SP"
                email="recadossp@reumatologiaosasco.com.br"
                workDayHours="08h às 18h - Segunda a Sexta"
                phone="PABX: (11) 2162-7199"
                whatsAppUrl=""
                doctoraliaUrl="https://google.com.br"
            />
        </footer>
    )
}