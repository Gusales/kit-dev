import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface StackCardProps {
  stackName: string
  stackImageBannerUrl: StaticImport
  projectsAmount: number
}

export function StackCard({
  projectsAmount,
  stackImageBannerUrl,
  stackName,
}: StackCardProps) {
  return (
    <div className="hover:scale-105 transition-all">
      <Image
        src={stackImageBannerUrl}
        alt={`Banner da stack ${stackName}`}
        width={750}
        height={500}
        className="w-[260px] h-[180px] rounded-md shadow-sm opacity-55"
      />
      <div className="flex items-center justify-center gap-2 text-white mt-2">
        <p>{stackName}</p>
        <div className="bg-white w-2 h-2 rounded-full" />
        <p>{projectsAmount} projetos</p>
      </div>
    </div>
  )
}
