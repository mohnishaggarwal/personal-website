import Image from 'next/image'
import Head from 'next/head'
import { GitHubIcon, YouTubeIcon } from '@/components/SocialIcons'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import blanklyPreview from '@/images/photos/blankly-preview.png'
import migPreview from '@/images/photos/mig.png'

const projects = [
  {
    name: 'Blankly',
    description:
      'Blankly makes it incredibly easy for you to go from a trading idea to a full trading algorithm in minutes instead of months. Our open source package has hit 1.6K stars and over 10K downloads / mo. And our platform has hit over 1K users / mo.',
    link: 'http://blankly.finance',
    github: 'https://github.com/Blankly-Finance/Blankly',
    youtube: 'https://www.youtube.com/watch?v=gBP6X20E-2g&ab_channel=BlanklyFinance',
    preview: blanklyPreview,
  },
  {
    name: 'Michigan Investment Group Platform',
    description:
      'Platform that enables investment teams and members in the club to actively engage and find interesting coverage on stocks including confidence scores on earnings calls via NLP, sentiment analysis, and fundamentals. (pwd: MIG-Rocks)',
    link: 'https://platform.michiganinvestmentgroup.com/dashboard',
    preview: migPreview
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Mohnish Aggarwal</title>
        <meta
          name="description"
          content="Here are a few projects I'm proud of building 🏗️."
        />
      </Head>
      <SimpleLayout
        title="Here are a few projects I'm proud of building 🏗️."
        intro="I’ve worked on many projects from little projects for myself to large-scale open source projects. Some projects do have private repositories, and I could't include the github. But if you would like to see the code for a project, please "
        projects={true}
      >

        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              {project.preview &&
                <div className="rounded-md relative h-56 flex-1">
                  <Image
                    src={project.preview}
                    alt=""
                    objectFit="cover"
                    width={500}
                    height={300}
                    className="rounded-md"
                  />
                </div>
              }
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <div className='flex items-center z-20 w-full relative mt-4 bottom-0 absolute'>
                <a href={project.link}><LinkIcon className="h-8 w-8 text-zinc-400 transition hover:text-blue-500 dark:text-zinc-200" /></a>
                {
                  project.github &&
                  <a href={project.github}><GitHubIcon className="h-7 w-7 ml-2 transition hover:fill-zinc-600 dark:group:fill-zinc-300 dark:fill-zinc-400" /></a>
                }
                {
                  project.github &&
                  <a href={project.youtube}><YouTubeIcon className="h-7 w-7 ml-3 transition hover:fill-zinc-600 dark:group:fill-zinc-300 dark:fill-zinc-400" /></a>
                }
              </div>
            </Card>
          ))}
        </ul>

        <p className="dark:text-zinc-200 text-zinc-800 mt-12">Want to see more projects? Check out my <a href="https://github.com/mohnishaggarwal" className='dark:text-blue-400 text-blue-500'>GitHub</a></p>
      </SimpleLayout>
    </>
  )
}
