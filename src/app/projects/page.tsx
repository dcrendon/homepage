import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoNASA from '@/images/logos/nasa.svg'
import logoImmich from '@/images/logos/immich.png'
import logoOpen from '@/images/logos/openwebui.png'
import logoWoodshed from '@/images/logos/txwoodshed.svg'
import clsx from 'clsx'

const projects = [
  {
    name: 'NASA Open Data Portal',
    description:
      'Data.nasa.gov is NASA’s publicly available metadata catalogue. ',
    link: { href: 'https://data.nasa.gov', label: 'data.nasa.gov' },
    logo: logoNASA,
  },
  {
    name: 'CLPS Landing Sites',
    description:
      'Landing site 3D interactive for NASA’s commercial lunar payload services.',
    link: { href: 'https://external.jsc.nasa.gov/clps-landing-sites', label: 'external.jsc.nasa.gov' },
    logo: logoNASA,
  },
  {
    name: 'SFA Awards Database',
    description:
      'The database that powers the Space Flight Awareness awards program at NASA Johnson Space Center.',
    link: { href: 'https://sfa.jsc.nasa.gov/AwardBadge.cfm?ID=52803', label: 'sfa.jsc.nasa.gov' },
    logo: logoNASA,
  },
  {
    name: 'Photo Gallery',
    description:
      'My self hosted photo gallery. I take a lot of photos and this is where I share them.',
    link: { href: 'https://photos.bungus.life', label: 'photos.bungus.life' },
    logo: logoImmich,
  },
  {
    name: 'Bebo AI',
    description:
      'My self hosted AI web ui. Created to provide access to AI tools for my family and friends.',
    link: { href: 'https://beboai.org/', label: 'beboai.org' },
    logo: logoOpen,
  },
  {
    name: 'Texas Woodshed',
    description:
      'Micro blog created for my dad to share his sports bets and other thoughts.',
    link: { href: 'https://www.txwoodshed.net/', label: 'txwoodshed.net' },
    logo: logoWoodshed,
    style: 'bg-white rounded-2xl'
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Some Things I’ve Been Building',
}

export default function Projects() {
  return (
    <SimpleLayout
      title='Some Things I’ve Been Building'
      intro="A handful of public-facing projects from my work at NASA and personal life. I’ve worked on a lot behind the scenes too, but these are the ones out in the open."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className={clsx(
                  "h-8 w-8",
                  project.style
                )}
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
