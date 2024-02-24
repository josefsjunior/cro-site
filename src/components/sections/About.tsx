export function About() {
    return (
        <>
            <div className="flex flex-col px-8 py-16 text-center gap-4 text-indigo-950 lg:w-1/2 lg:text-left lg:mx-auto lg:gap-8">
                <h3 className="text-xl font-medium lg:text-2xl">Quem Somos</h3>
                <h2 className="text-3xl font-bold lg:text-4xl">Nossa História</h2>
                <div className="flex flex-col gap-2 text-base lg:gap-4 lg:text-lg">
                    <p>Foi a partir da melhora da vida de pacientes com dor que nossa clínica surgiu há 20 anos atrás.</p>
                    <p>Prezamos pelo diagnóstico precoce e tratamento personalizado; para isso oferecemos serviços completos e de última geração com especialistas altamente atualizados e qualificados.</p>
                </div>
            </div>
        </>
    )
}