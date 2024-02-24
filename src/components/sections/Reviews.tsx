import { Review } from "./Review";
import GoogleIcon from '@mui/icons-material/Google';

export function Reviews() {
    return (
      <div className="flex flex-col bg-blue-950 p-8 gap-12 lg:px-32 lg:py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-evenly">
            <Review
                text="A Dr Ana Paula uma excelente profissional!"
                name="MARILENE ALVES"
                date="19/09/2023"
                photoUrl="https://lh3.googleusercontent.com/a/ACg8ocIr_Vkear7KzjDo8qtxOqXSqPZ1ilvWqEKYWbTfojMP=s120-c-rp-mo-br100"
            />
            <Review
                text="Clínica espetacular. Médicos experientes e super humanos. Atendimento muito bom. Sem sombras de dúvidas o melhor local"
                name="SALETE MELO"
                date="12/09/2023"
                photoUrl="https://lh3.googleusercontent.com/a-/ALV-UjXCUP35oYvgMdh_210bOGjLjDCdENuyPXsYgDOXJ46dy7c=s120-c-rp-mo-ba5-br100"
            />
            <Review
                text="Dr. Paulo excelente reumatologista..."
                name="NAIARA LACERDA"
                date="01/09/2023"
                photoUrl="https://lh3.googleusercontent.com/a-/AD_cMMS6HDGQiA3uMXYrrcvAbTXX2j3h2wnTbRRD2iU5PYK3-TE=s120-c-rp-mo-br100"
            />
        </div>
        <div className='flex w-auto justify-center'>
            <a id="doctoralia-button" href={"https://google.com.br"} target="_blank">
                <button type="button" className="flex text-blue-900 font-bold w-full px-6 py-2 fill-white gap-4 items-center rounded bg-gray-50">
                    <GoogleIcon />
                    Faça uma Avaliação!
                </button>
            </a>
        </div>
      </div>
    )
  }
  