import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { WhatsAppButton } from "../buttons/WhatsAppButton";

interface ClinicInfoProps {
    name: string
    street: string
    floor: string
    city: string
    email: string
    workDayHours: string
    weekendHours?: string
    phone: string
    whatsAppUrl: string
    doctoraliaUrl?: string
}

export function ClinicInfo({ name, street, floor, city, email, workDayHours, weekendHours, phone, whatsAppUrl, doctoraliaUrl }: ClinicInfoProps) {
    return (
        <div className="flex flex-col text-white gap-4">
            <h4 className="text-2xl font-bold">Unidade {name}</h4>
            <div className='flex flex-col gap-2 items-center lg:items-start lg:flex-row'>
                <PlaceIcon />
                <div>
                    <p>{street}</p>
                    <p>{floor}</p>
                    <p>{city}</p>
                </div>
            </div>
            <div className='flex flex-col gap-2 items-center lg:items-start lg:flex-row'>
                <EmailIcon />
                <p>{email}</p>
            </div>
            <div className='flex flex-col gap-2 items-center lg:items-start lg:flex-row'>
                <WatchLaterIcon />
                <div>
                    <p>{workDayHours}</p>
                    <p>{weekendHours}</p>
                </div>
            </div>
            <div className='flex flex-col gap-2 items-center lg:items-start lg:flex-row'>
                <PhoneEnabledIcon />
                <p>{phone}</p>
            </div>
            <div className='flex w-auto justify-center lg:justify-start'>
                <WhatsAppButton text={"WhatsApp "+ name} url={whatsAppUrl} defaultBackground/>
            </div>
            <div className='flex w-auto justify-center lg:justify-start'>
                {doctoraliaUrl &&
                    <a id="doctoralia-button" href={doctoraliaUrl} target="_blank">
                        <button type="button" className={`flex text-white w-full px-6 py-2 fill-white gap-4 items-center rounded bg-green-600`}>
                            <CalendarMonthIcon />
                            Agendamento Online
                        </button>
                    </a>
                }
            </div>
        </div>
    )
}