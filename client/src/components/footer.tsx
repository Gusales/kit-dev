import DonateIcon from '@/assets/donation.svg'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 w-full flex items-center justify-between py-2 px-3 sm:py-7 sm:px-11">
      <p className='text-sm text-white'>
        Gostou do site? Te ajudou quando precisou? <br /> Que tal ajudar a gente a aprimorar cada vez mais?
      </p>

      <div className='flex gap-3 items-center justify-between'>
        <a href="#" className='text-sm text-white hover:underline hover:decoration-white'>Doe para o café dos Devs!</a>
        <Image src={DonateIcon} alt="Icone de uma mão segurando uma moeda com um cifrão de dinheiro no meio, indicando doação" width={32} />
      </div>
    </footer>
  )
}