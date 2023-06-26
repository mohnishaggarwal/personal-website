import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function BooksSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Book({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Books - Mohnish Aggarwal</title>
        <meta
          name="description"
          content="I love reading books 📖. Here are some reads that I recommend."
        />
      </Head>
      <SimpleLayout
        title="I love reading books 📖. Here are some reads that I recommend."
        intro="I like to read about technology, financial markets, history, and random life stuff. Here are a few books I recommend."
      >
        <div className="space-y-20">
          <BooksSection title="Currently Reading">
            <Book title="Why We Sleep by Matthew Walker">
              I have a pretty tough time falling asleep at night, my brain doesn&apos;t shut off quickly and before I know it 1 to 2 hours has passed and I&apos;m back to taking another
              melotonin. If this sounds familiar to you, I highly recomend this book. Matthew Walker has dedicated his life to studying sleep and has given suggestions that have
              already began working for me.
            </Book>
            <Book title="But How Do It Know by John Clark Scott">
              If you&apos;re trying to understand computer architecture, I highly recommend this book. It takes a bottom up approach to helping you understand how a computer works. I really
              like how John Scott explains complex hardware conceptc with simple analogies.
            </Book>
          </BooksSection>
          <hr className='border-zinc-200 dark:border-zinc-600' />
          <BooksSection title="Finance">
            <Book title="The University of Berkshire Hathaway" />
            <Book title="The Intelligent Investor" />
            <Book title="The Psychology of Money" />
            <Book title="The Dhando Investor" />
          </BooksSection>
          <BooksSection title="Technology">
            <Book title="Clean Code" />
            <Book title="C++ Best Practices" />
          </BooksSection>
          <BooksSection title="Everything Else">
            <Book title="Homegoing" />
            <Book title="Maze Runner" />
          </BooksSection>
        </div>
      </SimpleLayout>
    </>
  )
}
