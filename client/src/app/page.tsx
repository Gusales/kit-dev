import { StackCard } from '@/components/StackCard'

import FrontendBanner from '@/assets/images/frontend-development-tools.jpg'
import BackendBanner from '@/assets/images/backend-development-tools.jpeg'
import UxAndUiBanner from '@/assets/images/ux-ui-development-tools.jpg'

export default function Home() {
  return (
    <section className="flex flex-col items-center gap-10 px-10 mt-2 sm:mt-10 sm:px-40 sm:items-start">
      <h2 className="text-white font-bold text-xl text-center max-w-[600px] sm:text-2xl sm:text-left">
        Seja bem-vindo ao Kit Dev, seu lugar para melhorar seus projetos e ir
        além.
      </h2>

      <div className="flex flex-col sm:gap-4 gap-4 w-full">
        <h3 className="text-white font-bold text-center sm:text-left">
          Acesse o que mais te interessa:
        </h3>

        <div className="flex items-center justify-between  flex-col gap-3 sm:flex-row sm:gap-0">
          <StackCard
            projectsAmount={13}
            stackImageBannerUrl={FrontendBanner}
            stackName="Frontend"
          />
          <StackCard
            projectsAmount={13}
            stackImageBannerUrl={BackendBanner}
            stackName="Backend"
          />
          <StackCard
            projectsAmount={13}
            stackImageBannerUrl={UxAndUiBanner}
            stackName="UX/UI"
          />
        </div>
      </div>
    </section>
  )
}
