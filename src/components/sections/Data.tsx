import { DataDetails } from "./DataDetails"

export function Data() {
    return (
        <>
            <div className="flex flex-col gap-4 p-8 lg:flex-row lg:justify-evenly lg:px-24">
                <DataDetails value="+20" description="Anos de Experiência" />
                <DataDetails value="+10" description="Médicos Especialistas" />
                <DataDetails value="+22mil" description="Pacientes Atendidos" />
            </div>
        </>
    )
}