import { useEffect, useRef } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Boun from '@/images/photos/Boun.jpg'
import Image from 'next/future/image'

import '@/styles/tailwind.css'
import 'focus-visible'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function BunAppreciationDay() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-purple-500 font-bold'>
      <Image src={Boun} className="object-cover w-48 rounded-3xl" />
      <h1 className='text-4xl mt-16'>
        Happy Bun Appreciation Day Meri Jaan! ❤️
      </h1>
    </div>
  );
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <div className="relative">
      {/* <Header />
      <main>
        <Component previousPathname={previousPathname} {...pageProps} />
      </main>
      <Footer /> */}
      <BunAppreciationDay />
    </div>
  )
}
